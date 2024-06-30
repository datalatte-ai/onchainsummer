/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next"
import { Pages } from "../../../utils/types"
import {
  DATALATTE_DOCS_URL,
  DATALATTE_HOMEPAGE_URL,
  DUDEAMIR_WARPCAST_PROFILE,
  TOBIAS_WARPCAST_PROFILE,
} from "../../../utils/urls"
import { getImageContent } from "../getImage"

export default async function getDatalatteExplanationContent(
  page: Pages,
  counter: number
) {
  return {
    ...(await getImageContent(page)),
    buttons: [
      <Button action="link" target={DUDEAMIR_WARPCAST_PROFILE}>
        🏗️ Amir
      </Button>,
      <Button action="link" target={TOBIAS_WARPCAST_PROFILE}>
        🏗️ Tobias
      </Button>,
      <Button action="link" target={DATALATTE_HOMEPAGE_URL}>
        🌐 datalatte.com
      </Button>,
      <Button action="link" target={DATALATTE_DOCS_URL}>
        📄 Litepaper
      </Button>,
    ],
    state: { counter: counter },
  }
}
