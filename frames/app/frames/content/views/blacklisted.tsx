/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next"
import { Pages } from "../../../utils/types"
import { getImageContent } from "../getImage"
import { DATALATTE_WARPCAST_PROFILE, OPENSEA_COLLECTION_LINK, WARPCAST_COMPOSE_SHARE_PRE_TEXT } from "../../../utils/urls"

export default async function getBlacklistedContent(
  page: Pages,
  counter: number
) {
  return {
    ...(await getImageContent(page)),
    buttons: [
      <Button action="post"
      target={{
        pathname: "/",
        query: { pageIndex: Pages.Extraction },
      }}>
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
      <Button action="link" target={WARPCAST_COMPOSE_SHARE_PRE_TEXT}>
        🔄 Share
      </Button>,
    ],
    state: { counter: counter },
  }
}
