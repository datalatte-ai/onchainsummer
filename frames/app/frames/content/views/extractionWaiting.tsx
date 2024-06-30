/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next"
import { Pages } from "../../../utils/types"
import loadAssets from "../loadAssets"
import { getImageContent } from "../getImage"

export default async function getExtractionWaitingContent(
  page: Pages,
  counter: number
) {
  await loadAssets()

  return {
    ...(await getImageContent(page)),
    buttons: [
      <Button
        action="post"
        target={{
          pathname: "/",
          query: { pageIndex: Pages.Extraction },
        }}
      >
        {page === Pages.ExtractionWaiting
          ? "🔄 Refresh"
          : "🔐 Store your digital Twin"}
      </Button>,
    ],
    state: { counter: counter },
  }
}
