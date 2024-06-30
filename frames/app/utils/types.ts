export enum Pages {
  Welcome1,
  Welcome2,
  Welcome3,
  Welcome4,
  TermsOrStart,
  Extraction,
  Arguments1,
  Arguments2,
  Arguments3,
  ExtractionScoring,
  ExtractionWaiting,
  ExtractionFailed,
  ExtractionExplanation,
  Scoring,
  Whitelisted,
  WhitelistCheckFailed,
  Blacklisted,
  AllNftsSoldFailed,
  OutOfNfts,
  Congrats,
  DatalatteExplanation,
}

export function getPageFromString(pageNumber: string): Pages {
  const pageNumberAsInt = parseInt(pageNumber)

  const page = Object.values(Pages).find(
    (value) => value === pageNumberAsInt
  ) as Pages

  return page || Pages.Welcome1
}
