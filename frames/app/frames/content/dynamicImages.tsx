/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import { ImageResponse } from "@vercel/og"
import fs from "fs"
import { Pages } from "../../utils/types"
import Arguments1 from "./dynamicImages/Arguments1"
import Arguments2 from "./dynamicImages/Arguments2"
import Arguments3 from "./dynamicImages/Arguments3"
import Attributes from "./dynamicImages/Attributes"
import Scoring from "./dynamicImages/Scoring"

const getImageResponse = (page: Pages, data: object) => {
  return new ImageResponse(
    page === Pages.Extraction ? (
      <Attributes data={data} />
    ) : page === Pages.Arguments1 ? (
      <Arguments1 data={data} />
    ) : page === Pages.Arguments2 ? (
      <Arguments2 data={data} />
    ) : page === Pages.Arguments3 ? (
      <Arguments3 data={data} />
    ) : (
      <Scoring data={data} />
    ),
    {
      width: 500,
      height: 500,
      debug: false,
      fonts: [
        {
          data: fs.readFileSync("./public/Syne-Regular.ttf"),
          name: "syne",
          weight: 400,
          style: "normal",
        },
        {
          data: fs.readFileSync("./public/Syne-ExtraBold.ttf"),
          name: "syne-extra",
          weight: 400,
          style: "normal",
        },
      ],
    }
  )
}
export default getImageResponse
