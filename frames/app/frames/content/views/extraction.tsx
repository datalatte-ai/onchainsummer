/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next"
import { Pages } from "../../../utils/types"
import { WARPCAST_COMPOSE_SHARE_TEXT } from "../../../utils/urls"
import { getImageContent } from "../getImage"
import loadAssets from "../loadAssets"
import { button } from "frames.js/core"
import { checkScore } from "../../../utils/requests"

export default async function getExtractionContent(
  page: Pages,
  counter: number,
  requesterFid: number,
  data: any
) {
    const user_exist_score = await checkScore(requesterFid)
//   console.log('data', data)
  await loadAssets()

  return {
    ...(await getImageContent(page, data)),
    buttons: [
      <Button action="link" target={WARPCAST_COMPOSE_SHARE_TEXT}>
        🔄 Share
      </Button>,
      <Button
      action="post"
      target={{
        pathname: "/",
        query: { pageIndex: Pages.Arguments1 },
      }}
    >
      🤔 Read arguments
    </Button>,
      <Button
        action="post"
        target={{
          pathname: "/",
          query: user_exist_score.data ? { pageIndex: Pages.ExtractionScoring } : { pageIndex: Pages.ExtractionExplanation }
        }}
      >
        { user_exist_score.data 
            ?  "🏅 Ranking" 
            :  "✅ Continue & store"
        }
      </Button>,
    ],
    state: { counter: counter },
  }
}
