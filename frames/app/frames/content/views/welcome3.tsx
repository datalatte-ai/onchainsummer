/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next"
import { Pages } from "../../../utils/types"
import { getImageContent } from "../getImage"
import { checkScore } from "../../../utils/requests"

export default async function getWelcome3Content(page: Pages, counter: number, requesterFid: number) {
    const user_exist_score = await checkScore(requesterFid)
  return {
    ...(await getImageContent(page)),
    buttons: user_exist_score.data ? 
    [
      <Button
        action="post"
        target={{ pathname: "/", query: { pageIndex: Pages.Extraction } }}
      >
        👥 Digital twin
      </Button>,
      <Button
        action="post"
        target={{ pathname: "/", query: { pageIndex: Pages.Welcome4 } }}
      >
        📖 Continue story
      </Button>,
    ]
    :
    [
        <Button
          action="post"
          target={{ pathname: "/", query: { pageIndex: Pages.TermsOrStart } }}
        >
          🛠️ Create your twin
        </Button>,
        <Button
          action="post"
          target={{ pathname: "/", query: { pageIndex: Pages.Welcome4 } }}
        >
          📖 Continue story
        </Button>,
      ],
    state: { counter: counter },
  }
}
