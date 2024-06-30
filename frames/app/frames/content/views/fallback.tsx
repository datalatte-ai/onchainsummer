/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next"
import { container } from "../../../utils/styles"
import { Pages } from "../../../utils/types"

export default function getFallbackContent(_page: Pages, counter: number) {
  return {
    image: (
      <div tw={container}>
        <div tw="flex">Oops, how did we end up here?</div>
      </div>
    ),
    imageOptions: { aspectRatio: "1:1" },
    buttons: [
      <Button
        action="post"
        target={{ pathname: "/", query: { pageIndex: Pages.Welcome1 } }}
      >
        🔄 Start again
      </Button>,
    ],
    state: { counter: counter },
  }
}
