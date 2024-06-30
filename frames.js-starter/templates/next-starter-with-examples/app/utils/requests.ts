import { backendURL } from "./utils"
import { ethers } from "ethers"

const NFT_CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3"

export async function checkProgress(fid: number) {
  const url = `${backendURL()}/api/v1/check_progress/${fid}`

  const controller = new AbortController()
  const signal = controller.signal

  const timeoutId = setTimeout(() => {
    controller.abort()
    console.log("Fetch request canceled after 5 seconds")
  }, 5000)

  return fetch(url, { signal })
    .then((response) => response.json())
    .then((data) => {
      // Clear the timeout since the request was successful
      clearTimeout(timeoutId)
      console.log(data)

      return data
    })
    .catch((error) => {
      if (error.name === "AbortError") {
        console.log("Fetch request was aborted")
        return { status: "aborted" }
      } else {
        console.error("Fetch request failed:", error)
        return { status: "failed" }
      }
    })
}

export async function isFidAnUser(fid: number) {
  const url = `/api/v1/is_fid_a_user/${fid}`
  const response = await fetch(url)

  return response.json()
}

export async function allNftsSold() {
  const contract = new ethers.Contract(
    NFT_CONTRACT_ADDRESS,
    ["event Transfer(address from, address to, uint256 tokenId)"],
    ethers.getDefaultProvider()
  )

  const events = await contract.queryFilter("Transfer")

  return events
}
