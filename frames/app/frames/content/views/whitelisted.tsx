/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next"
import { Pages } from "../../../utils/types"
import { getImageContent } from "../getImage"

export default async function getWhitelistedContent(
  page: Pages,
  counter: number
) {
  return {
    ...(await getImageContent(page)),
    buttons: [
      <Button
        action="post"
        target={{ pathname: "/", query: { pageIndex: Pages.Congrats } }}
      >
        🔄 Refresh
      </Button>,
    ],
    state: { counter: counter },
  }
}
