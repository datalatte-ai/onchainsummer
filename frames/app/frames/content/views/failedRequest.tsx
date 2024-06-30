/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next"
import { Pages } from "../../../utils/types"
import {
  DATALATTE_WARPCAST_PROFILE,
  OPENSEA_COLLECTION_LINK,
} from "../../../utils/urls"
import { getImageContent } from "../getImage"

export default async function getFailedRequestContent(
  page: Pages,
  counter: number
) {
  return {
    ...(await getImageContent(page)),
    buttons: [
      <Button action="link" target={OPENSEA_COLLECTION_LINK}>
        Opensea: dataBarista-IGA
      </Button>,
      <Button action="link" target={DATALATTE_WARPCAST_PROFILE}>
        👉🏼 @datalatte
      </Button>,
      <Button
        action="post"
        target={{
          pathname: "/",
          query: { pageIndex: Pages.DatalatteExplanation },
        }}
      >
        ☕️ What&apos;s datalatte?
      </Button>,
      <Button
        action="post"
        target={{
          pathname: "/",
          query: { pageIndex: Pages.Welcome1 },
        }}
      >
        🔄 Restart
      </Button>,
    ],
    state: { counter: counter },
  }
}
