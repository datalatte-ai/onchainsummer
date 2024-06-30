import { farcasterHubContext } from "frames.js/middleware"
import { createFrames } from "frames.js/next"
import { DEFAULT_DEBUGGER_HUB_URL } from "../utils/debug"
import { appURL } from "../utils/utils"
import { imagesWorkerMiddleware } from "frames.js/middleware/images-worker"

export type State = {
  counter: number
}

const isDev = process.env.NODE_ENV === "development"
console.log("isDev", isDev)

export const frames = createFrames({
  baseUrl: appURL(),
  basePath: "/frames",
  initialState: { counter: 0 },
  debug: isDev,
  middleware: [
    // farcasterHubContext({
    //   hubHttpUrl: isDev
    //     ? DEFAULT_DEBUGGER_HUB_URL
    //     : // : "https://nemes.farcaster.xyz:2281",
    //       "https://hub.freefarcasterhub.com:3281",
    //   // "https://hub-api.neynar.com:2281",
    // }),
    // imagesWorkerMiddleware({
    //   imagesRoute: "/images",
    //   secret: process.env.NEXT_PUBLIC_IMAGES_SECRET,
    // }),
  ],
})
