import { getRanking } from "../../utils/requests"
import { Pages } from "../../utils/types"
import { getContent } from "../content"
import getFallbackContent from "../content/views/fallback"

export default async function getRankingEx(
  requesterFid: number,
  page: Pages,
  counter: number
) {
  const response = await getRanking(requesterFid)
  if (response?.status) {
      return (
        (await getContent(Pages.Extraction, counter, requesterFid, JSON.parse(response.data))) ||
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
