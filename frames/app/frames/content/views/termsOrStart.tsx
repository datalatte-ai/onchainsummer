/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next"
import { Pages } from "../../../utils/types"
import { DATALATTE_TERMS_URL } from "../../../utils/urls"
import { getImageContent } from "../getImage"

export default async function getTermsOrStartContent(
  page: Pages,
  counter: number
) {
  return {
    ...(await getImageContent(page)),
    buttons: [
      <Button action="link" target={DATALATTE_TERMS_URL}>
        📜 Terms & Conditions
      </Button>,
      <Button
        action="post"
        target={{ pathname: "/", query: { pageIndex: Pages.Extraction } }}
      >
        ✅ Agree & continue
      </Button>,
    ],
    state: { counter: counter },
  }
}
