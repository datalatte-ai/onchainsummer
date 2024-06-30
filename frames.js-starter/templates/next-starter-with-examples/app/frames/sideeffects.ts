import { allNftsSold, checkProgress, isFidAnUser } from "../utils/requests"
import { Pages } from "../utils/types"
import { getContent, getFallbackContent } from "./content"

export type SideeffectResponse =
  | {}
  | { fidAttributes: string }
  | { isWhitelisted: boolean }

export default async function checkForSideEffects(
  requesterFid: number,
  page: Pages,
  counter: number
): Promise<SideeffectResponse> {
  let fidAttributes = ""
  if (page === Pages.Extraction) {
    const response = await checkProgress(requesterFid)

    if (response?.status) {
      if (
        ["aborted", "cast_history", "extracting_casts"].includes(
          response.status
        )
      ) {
        return (
          (await getContent(Pages.ExtractionWaiting, counter)) ||
          getFallbackContent(counter)
        )
      } else if (response.status === "failed") {
        console.error(
          `An error occurred on the backend while checking progress for ${requesterFid} failed`
        )
        return (
          (await getContent(Pages.ExtractionFailed, counter)) ||
          getFallbackContent(counter)
        )
      } else if (response.status === "done" && response.attributes) {
        fidAttributes = response.attributes

        return { fidAttributes }
      } else {
        console.error(
          `An error occurred while checking progress for ${requesterFid}: ${response.status} ${response.statusText}`
        )
        return (
          (await getContent(Pages.TermsOrStart, counter)) ||
          getFallbackContent(counter)
        )
      }
    }

    return { fidAttributes }
  }

  let isWhitelisted
  if (page === Pages.Whitelisted) {
    let response = await isFidAnUser(requesterFid)

    if (!response.ok) {
      console.error(
        `An error occurred while checking if ${requesterFid} is a user: ${response.status} ${response.statusText}`
      )
      return (
        (await getContent(Pages.Whitelisted, counter)) ||
        getFallbackContent(counter)
      )
    }

    if (!response.data) {
      console.log(`${requesterFid} is not a user`)
      return (
        (await getContent(Pages.Blacklisted, counter)) ||
        getFallbackContent(counter)
      )
    } else {
      isWhitelisted = true
    }

    response = allNftsSold()
    if (!response.ok) {
      console.error(
        `An error occurred while checking for ${requesterFid} if all nfts are sold: ${response.status} ${response.statusText}`
      )
      return (
        (await getContent(Pages.AllNftsSoldFailed, counter)) ||
        getFallbackContent(counter)
      )
    } else if (!!response) {
      console.log(`All nfts are sold`)
      return (
        (await getContent(Pages.OutOfNfts, counter)) ||
        getFallbackContent(counter)
      )
    }

    return { isWhitelisted }
  }

  return {}
}
