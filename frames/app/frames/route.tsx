/* eslint-disable react/jsx-key */
import { Pages, getPageFromString } from "../utils/types"
import { getContent } from "./content"
import getFallbackContent from "./content/views/fallback"
import { frames } from "./frames"
import checkForSideEffects from "./sideeffects"

// @ts-ignore
const frameHandler = frames(async (ctx: any) => {
  if (!ctx.message?.isValid) {
    console.log("Invalid message")
    // throw new Error("Invalid message")
  }

  let page = getPageFromString(ctx.searchParams?.pageIndex)
  const requesterFid = ctx.message?.requesterFid
  const counter = 0
  
  let content = await checkForSideEffects(page, requesterFid, counter)
  if (content) return content
  
  content = await getContent(page, counter, requesterFid)
  if (content) return content

  return getFallbackContent(page, counter)
})

export const GET = frameHandler
export const POST = frameHandler
