/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next"
import { Pages } from "../../../utils/types"
import { WARPCAST_COMPOSE_SHARE_PRE_TEXT } from "../../../utils/urls"
import { getImageContent } from "../getImage"
import loadAssets from "../loadAssets"

export default async function getArguments3Content(
  page: Pages,
  counter: number,
  data: any
) {
  await loadAssets()

  return {
    ...(await getImageContent(page, data)),
    buttons: [
      <Button action="link" target={WARPCAST_COMPOSE_SHARE_PRE_TEXT}>
        🔄 Share
      </Button>,
      <Button
        action="post"
        target={{
          pathname: "/",
          query: { pageIndex: Pages.ExtractionExplanation },
        }}
      >
        ✅ Continue & store
      </Button>,
      <Button
        action="post"
        target={{
          pathname: "/",
          query: { pageIndex: Pages.Arguments2 },
        }}
      >
        👈 Prev
      </Button>,
    ],
    state: { counter: counter },
  }
}
