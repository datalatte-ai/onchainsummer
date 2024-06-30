/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next"
import { Pages } from "../../../utils/types"
import loadAssets from "../loadAssets"
import { getImageContent } from "../getImage"
import { checkScoreExtra24, extractionScore24 } from "../../../utils/requests"

export default async function getExtractionWaitingScoringContent(
  page: Pages,
  counter: number,
  requesterFid: number
) {
  await loadAssets()
    const user_24_score = await checkScoreExtra24(requesterFid)
    const response_extraction_24 = await extractionScore24(requesterFid)
    console.log("response for extracrion 24", response_extraction_24.status)
    console.log("response for score 24", user_24_score.data)
  return {
    ...(await getImageContent(page)),
    buttons: [
      <Button
        action="post"
        target={{
          pathname: "/", 
          query: user_24_score.data ? { pageIndex: Pages.ExtractionExplanation } : { pageIndex: Pages.ExtractionScoring },
        }}
      >
        {"🔄 Refresh"}
      </Button>,
    ],
    state: { counter: counter },
  }
}
