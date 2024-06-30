/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next"
import { Pages } from "../../../utils/types"
import { getImageContent } from "../getImage"
import { checkUserWhiteListed } from "../../../utils/requests"

export default async function getExtractionExplanationContent(
  page: Pages,
  counter: number,
  requesterFid: number
) {

    const user_can_wh = await checkUserWhiteListed(requesterFid)
  return {
    ...(await getImageContent(page)),
    buttons: [
      <Button
        action="post"
        target={{ pathname: "/", query: user_can_wh ? { pageIndex: Pages.Scoring } : { pageIndex: Pages.Blacklisted } }}
      >
        {/* 🪙  Mint a dataBarista NFT */}
        🏆 Claim a dataBarista NFT
      </Button>,
    ],
    state: { counter: counter },
  }
}
