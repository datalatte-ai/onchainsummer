/* eslint-disable react/jsx-key */
import { Pages } from "../utils/types"
import getArguments1Content from "./content/views/arguments1"
import getArguments2Content from "./content/views/arguments2"
import getArguments3Content from "./content/views/arguments3"
import getBlacklistedContent from "./content/views/blacklisted"
import getCongratsContent from "./content/views/congrats"
import getDatalatteExplanationContent from "./content/views/datalatteExplanation"
import getExtractionContent from "./content/views/extraction"
import getExtractionWaitingContent from "./content/views/extractionWaiting"
import getExtractionExplanationContent from "./content/views/extractionExplanation"
import getFailedRequestContent from "./content/views/failedRequest"
import getOutOfNftsContent from "./content/views/outOfNfts"
import getScoringContent from "./content/views/scoring"
import getTermsOrStartContent from "./content/views/termsOrStart"
import getWelcome1Content from "./content/views/welcome1"
import getWelcome2Content from "./content/views/welcome2"
import getWelcome3Content from "./content/views/welcome3"
import getWelcome4Content from "./content/views/welcome4"
import getWhitelistedContent from "./content/views/whitelisted"
import getExtractionWaitingScoringContent from "./content/views/extractionWaitingScoring"

export async function getContent(page: Pages, counter: number, requesterFid: number, data?: any) {
  if (page === Pages.Welcome1) {
    return await getWelcome1Content(page, counter)
  }

  if (page === Pages.Welcome2) {
    return await getWelcome2Content(page, counter, requesterFid)
  }

  if (page === Pages.Welcome3) {
    return await getWelcome3Content(page, counter, requesterFid)
  }

  if (page === Pages.Welcome4) {
    return await getWelcome4Content(page, counter, requesterFid)
  }

  if (page === Pages.TermsOrStart) {
    return await getTermsOrStartContent(page, counter)
  }

  if (page === Pages.Extraction) {
    return await getExtractionContent(page, counter, requesterFid, data)
  }

  if (page === Pages.ExtractionWaiting) {
    return await getExtractionWaitingContent(page, counter)
  }

  if (page === Pages.ExtractionScoring) {
    return await getExtractionWaitingScoringContent(page, counter, requesterFid)
  }
  
  if (page === Pages.Arguments1) {
    return await getArguments1Content(page, counter, data)
  }

  if (page === Pages.Arguments2) {
    return await getArguments2Content(page, counter, data)
  }

  if (page === Pages.Arguments3) {
    return await getArguments3Content(page, counter, data)
  }

  if (
    page === Pages.ExtractionFailed ||
    page === Pages.AllNftsSoldFailed ||
    page === Pages.WhitelistCheckFailed
  ) {
    return await getFailedRequestContent(page, counter)
  }

  if (page === Pages.ExtractionExplanation) {
    return await getExtractionExplanationContent(page, counter, requesterFid)
  }

  if (page === Pages.Scoring) {
    return await getScoringContent(page, counter, data)
  }

  if (page === Pages.Whitelisted) {
    return await getWhitelistedContent(page, counter)
  }

  if (page === Pages.Blacklisted) {
    return await getBlacklistedContent(page, counter)
  }

  if (page === Pages.OutOfNfts) {
    return await getOutOfNftsContent(page, counter)
  }

  if (page === Pages.Congrats) {
    return await getCongratsContent(page, counter)
  }

  if (page === Pages.DatalatteExplanation) {
    return await getDatalatteExplanationContent(page, counter)
  }
}
