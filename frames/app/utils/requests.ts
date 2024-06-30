import { backendURL } from "./utils";
import { ethers } from "ethers";

const NFT_CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

export async function checkProgress(fid: number) {
    const url = `${backendURL()}/api/v1/check_progress/${fid}`;

    const controller = new AbortController();
    const signal = controller.signal;

    const timeoutId = setTimeout(() => {
        controller.abort();
        console.log("Fetch request canceled after 5 seconds");
    }, 5000);

    return fetch(url, { signal })
        .then((response) => response.json())
        .then((responseData) => {
            // Clear the timeout since the request was successful
            clearTimeout(timeoutId);
            return responseData;
            // // Parse the data field
            // let data;
            // try {
            //   data = responseData;
            //   console.log("Parsed data:", data);
            // } catch (error) {
            //   console.error("Error parsing data:", error);
            //   return { status: "failed", error: "Parsing error" }
            // }

            // // Access the Inventory object
            // if (data && JSON.parse(data).Inventory) {
            //   console.log("Inventory data:", JSON.parse(data).Inventory)
            //   return data
            // } else {
            //   console.log("Inventory object not found in data")
            //   return { status: "no_inventory" }
            // }
        })
        .catch((error) => {
            if (error.name === "AbortError") {
                console.log("Fetch request was aborted");
                return { status: "aborted" };
            } else {
                console.error("Fetch request failed:", error);
                return { status: "failed" };
            }
        });
}


export async function getRanking(fid: number) {
    const url = `${backendURL()}/api/v1/get_ranking/${fid}`;

    const controller = new AbortController();
    const signal = controller.signal;

    const timeoutId = setTimeout(() => {
        controller.abort();
        console.log("Fetch request canceled after 5 seconds");
    }, 5000);

    return fetch(url, { signal })
        .then((response) => response.json())
        .then((data) => {
            // Clear the timeout since the request was successful
            clearTimeout(timeoutId);
            return data;
        })
        .catch((error) => {
            if (error.name === "AbortError") {
                console.log("Fetch request was aborted");
                return { status: "aborted" };
            } else {
                console.error("Fetch request failed:", error);
                return { status: "failed" };
            }
        });
}

export async function isFidAnUser(fid: number) {
    const url = `/api/v1/is_fid_a_user/${fid}`;
    const response = await fetch(url);

    return response.json();
}

export async function allNftsSold() {
    const contract = new ethers.Contract(
        NFT_CONTRACT_ADDRESS,
        ["event Transfer(address from, address to, uint256 tokenId)"],
        ethers.getDefaultProvider()
    );

    const events = await contract.queryFilter("Transfer");

    return events;
}


export async function checkScore(fid: number) {
    const url = `${backendURL()}/api/v1/get_user_score/${fid}`;
    const response = await fetch(url);

    return response.json();
}

export async function checkScoreExtra24(fid: number) {
    const url = `${backendURL()}/api/v1/get_user_score_24/${fid}`;
    const response = await fetch(url);

    return response.json();
}

export async function extractionScore24(fid: number) {
    const url = `${backendURL()}/api/v1/create_scoring/${fid}`;
    const response = await fetch(url);

    return response.json();
}

export async function checkUserWhiteListed(fid: number) {
    const url = `${backendURL()}/api/v1/is_fid_a_user/${fid}`;
    const response = await fetch(url);

    return response.json();
}