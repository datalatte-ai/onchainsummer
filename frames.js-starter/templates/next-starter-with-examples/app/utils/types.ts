export enum Pages {
  Welcome1,
  Welcome2,
  Welcome3,
  Welcome4,
  TermsOrStart,
  Extraction,
  ExtractionWaiting,
  ExtractionFailed,
  ExtractionExplanation,
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
