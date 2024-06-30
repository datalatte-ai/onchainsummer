import { createPublicClient, http, parseAbi } from "viem";
import { optimism } from "viem/chains";
import type { AddressReturnType, HubHttpUrlOptions } from "./types";
import { DEFAULT_HUB_API_KEY, DEFAULT_HUB_API_URL } from "./default";
import { extractAddressFromJSONMessage } from "./utils";

/**
 * Returns the first verified address for a given `Farcaster` users `fid` if available, falling back to their account custodyAddress
 */
export async function getAddressForFid<
  Options extends
    | ({ fallbackToCustodyAddress?: boolean } & HubHttpUrlOptions)
    | undefined,
>({
  fid,
  options = {},
}: {
  fid: number;
  options?: Options;
}): Promise<AddressReturnType<Options>> {
  const {
    fallbackToCustodyAddress = true,
    hubHttpUrl = DEFAULT_HUB_API_URL,
    hubRequestOptions = {
      headers: {
        api_key: DEFAULT_HUB_API_KEY,
      },
    },
  } = options;

  const response = await fetch(
    `${hubHttpUrl}/v1/verificationsByFid?fid=${fid}`,
    hubRequestOptions
  );
  const { messages } = (await response
    .clone()
    .json()
    .catch(async () => {
      // body has not been
      throw new Error(
        `Failed to parse response body as JSON because server hub returned response with status "${response.status}" and body "${await response.clone().text()}"`
      );
    })) as { messages?: Record<string, unknown>[] };

  let address: AddressReturnType<Options> | null = null;

  // find first valid address
  if (messages) {
    for (const message of messages) {
      address = extractAddressFromJSONMessage(message) ?? null;

      if (address) {
        break;
      }
    }
  }

  if (address) {
    return address;
  }

  if (fallbackToCustodyAddress) {
    const publicClient = createPublicClient({
      transport: http(),
      chain: optimism,
    });
    address = await publicClient.readContract({
      abi: parseAbi(["function custodyOf(uint256 fid) view returns (address)"]),
      // IdRegistry contract address
      address: "0x00000000fc6c5f01fc30151999387bb99a9f489b",
      functionName: "custodyOf",
      args: [BigInt(fid)],
    });
  }

  return address as unknown as AddressReturnType<Options>;
}
