/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next"
import { Pages } from "../../../utils/types"
import {
  DATALATTE_WARPCAST_PROFILE,
  WARPCAST_COMPOSE_SHARE_TEXT,
} from "../../../utils/urls"
import { getImageContent } from "../getImage"

export default async function getScoringContent(
  page: Pages,
  counter: number,
  data: any
) {
  return {
    ...(await getImageContent(page, data)),
    buttons: [
      <Button
        action="post"
        target={{
          pathname: "/",
          query: { pageIndex: Pages.Extraction },
        }}
      >
        👥 My twin
      </Button>,
      <Button action="link" target={DATALATTE_WARPCAST_PROFILE}>
        👉🏼 follow @datalatte
      </Button>,
      <Button
        action="post"
        target={{
          pathname: "/",
          query: { pageIndex: Pages.DatalatteExplanation },
        }}
      >
        ☕️ datalatte?
      </Button>,
      <Button action="link" target={WARPCAST_COMPOSE_SHARE_TEXT}>
        🔄 Share
      </Button>,
    ],
    state: { counter: counter },
  }
}
