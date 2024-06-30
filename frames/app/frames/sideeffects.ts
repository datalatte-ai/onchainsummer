import { Pages } from "../utils/types"
import checkExtractionProgress from "./sideeffects/extraction"
import getRankingEx from "./sideeffects/getRanking"
export default async function checkForSideEffects(
  page: Pages,
  requesterFid: number,
  counter: number
): Promise<any> {
  if (
    page === Pages.Extraction ||
    page === Pages.Arguments1 ||
    page === Pages.Arguments2 ||
    page === Pages.Arguments3 ||
    page === Pages.Scoring
  ) {
    return await checkExtractionProgress(requesterFid, page, counter)
  }

  // if (page === Pages.ExtractionExplanation) {
  //   return await getRanking(requesterFid, page, counter)
  // }

  // if (page === Pages.Whitelisted) {
  //   let response = await isFidAnUser(requesterFid)

  //   if (!response.ok) {
  //     console.error(
  //       `An error occurred while checking if ${requesterFid} is a user: ${response.status} ${response.statusText}`
  //     )
  //     return (
  //       (await getContent(Pages.Whitelisted, counter)) ||
  //       getFallbackContent(page, counter)
  //     )
  //   }

  //   if (!response.data) {
  //     console.log(`${requesterFid} is not a user`)
  //     return (
  //       (await getContent(Pages.Blacklisted, counter)) ||
  //       getFallbackContent(page, counter)
  //     )
  //   } else {
  //     data = true
  //   }

  //   response = allNftsSold()
  //   if (!response.ok) {
  //     console.error(
  //       `An error occurred while checking for ${requesterFid} if all nfts are sold: ${response.status} ${response.statusText}`
  //     )
  //     return (
  //       (await getContent(Pages.AllNftsSoldFailed, counter)) ||
  //       getFallbackContent(page, counter)
  //     )
  //   } else if (!!response) {
  //     console.log(`All nfts are sold`)
  //     return (
  //       (await getContent(Pages.OutOfNfts, counter)) ||
  //       getFallbackContent(page, counter)
  //     )
  //   }
}
