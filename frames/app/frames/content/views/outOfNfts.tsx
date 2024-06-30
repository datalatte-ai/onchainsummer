/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next"
import { Pages } from "../../../utils/types"
import { getImageContent } from "../getImage"
import {
  DATALATTE_WARPCAST_PROFILE,
  OPENSEA_COLLECTION_LINK,
  WARPCAST_COMPOSE_SHARE_TEXT,
} from "../../../utils/urls"

export default async function getOutOfNftsContent(
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
      <Button action="link" target={WARPCAST_COMPOSE_SHARE_TEXT}>
        🔄 Share
      </Button>,
    ],
    state: { counter: counter },
  }
}
