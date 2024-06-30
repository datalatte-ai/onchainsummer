import { images } from "../../utils/assets"
import { Pages } from "../../utils/types"

import getImageResponse from "./dynamicImages"

export async function getImageContent(
  page: Pages,
  data?: any
): Promise<{
  image: JSX.Element | string
  imageOptions: { aspectRatio: "1:1" }
}> {
  let image: JSX.Element | string = images[page]!
  if (
    page === Pages.Extraction ||
    page === Pages.Arguments1 ||
    page === Pages.Arguments2 ||
    page === Pages.Arguments3 ||
    page === Pages.Scoring
  ) {
    const imageResponse = getImageResponse(page, data)
    const imgBuffer = await imageResponse!.arrayBuffer()

    image = `data:image/png;base64,${Buffer.from(imgBuffer).toString("base64")}`
  }

  return {
    image,
    imageOptions: { aspectRatio: "1:1" },
  }
}
