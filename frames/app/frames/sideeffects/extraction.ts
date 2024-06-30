import { checkProgress, getRanking } from "../../utils/requests"
import { Pages } from "../../utils/types"
import { getContent } from "../content"
import getFallbackContent from "../content/views/fallback"

export default async function checkExtractionProgress(
  requesterFid: number,
  page: Pages,
  counter: number
) {
  const response = await checkProgress(requesterFid)
  if (response?.status) {
    if (
      ["aborted", "cast_history", "cast_extracting"].includes(response.status) // "abort" comes from requests.ts
    ) {
      return (
        (await getContent(Pages.ExtractionWaiting, counter, requesterFid)) ||
        getFallbackContent(page, counter)
      )
    } else if (
      response.status === "failed" || // "failed" comes from requests.ts
      response.status === "cast_history_failed" ||
      response.status === "cast_extraction_failed"
    ) {
      console.error(
        `An error occurred on the backend while checking progress for ${requesterFid} failed, failed status`
      )
      return (
        (await getContent(Pages.ExtractionFailed, counter, requesterFid)) ||
        getFallbackContent(page, counter)
      )
    } else if (response.status === "cast_history_extraction_done") {
      if (!response.data) {
        console.error(
          `An error occurred on the backend while checking progress for ${requesterFid} failed, no data`
        )
        return (
          (await getContent(Pages.ExtractionFailed, counter, requesterFid)) ||
          getFallbackContent(page, counter)
        )
      }
      if (page == Pages.Scoring) {
        const response = await getRanking(requesterFid)
        if (response?.status) {
            return (
                (await getContent(page, counter, requesterFid, response.data)) ||
                getFallbackContent(page, counter)
              )
        } else {
            console.error(
                `An error occurred while checking progress for ${requesterFid}: ${response.status} ${response.statusText}`
              )
              return (
                (await getContent(Pages.TermsOrStart, counter, requesterFid)) ||
                getFallbackContent(page, counter)
              )
        }
        
      }
      return (
        (await getContent(page, counter, requesterFid, JSON.parse(response.data))) ||
        getFallbackContent(page, counter)
      )
    } else {
      console.error(
        `An error occurred while checking progress for ${requesterFid}: ${response.status} ${response.statusText}`
      )
      return (
        (await getContent(Pages.TermsOrStart, counter, requesterFid)) ||
        getFallbackContent(page, counter)
      )
    }
  }
}
