/* eslint-disable react/jsx-key */
import { Pages, getPageFromString } from "../utils/types"
import { getContent, getFallbackContent } from "./content"
import { State, frames } from "./frames"
import checkForSideEffects from "./sideeffects"

// @ts-ignore
const frameHandler = frames(async (ctx: any) => {
  // if (!ctx.message?.isValid) {
  //   throw new Error("Invalid message")
  // }

  let page = getPageFromString(ctx.searchParams?.pageIndex ?? Pages.Welcome1)
  const requesterFid = ctx.message?.requesterFid
  const counter = 0

  const response = await checkForSideEffects(page, requesterFid, counter)

  const content = await getContent(page, counter, response)
  if (content) return content

  return getFallbackContent(counter)
})

export const GET = frameHandler
export const POST = frameHandler
