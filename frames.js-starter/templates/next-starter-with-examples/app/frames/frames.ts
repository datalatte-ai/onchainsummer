import { createFrames } from "frames.js/next"
import { farcasterHubContext } from "frames.js/middleware"
import { DEFAULT_DEBUGGER_HUB_URL } from "../utils/debug"

export type State = {
  counter: number
}

const isDev = process.env.NODE_ENV === "development"
export const frames = createFrames({
  basePath: "/frames",
  initialState: { counter: 0 },
  debug: isDev,
  middleware: [
    farcasterHubContext({
      hubHttpUrl: isDev
        ? DEFAULT_DEBUGGER_HUB_URL
        : "https://nemes.farcaster.xyz:2281",
    }),
  ],
})
