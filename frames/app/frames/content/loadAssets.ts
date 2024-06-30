import * as fs from "node:fs/promises"
import * as path from "node:path"

export default async function loadAssets() {
  // const syneScriptFontData = await syneScriptFont

  const fontNames = [
    "syne.regular.ttf",
    "FiraCodeiScript-Regular.ttf",
    "Inter-Bold.ttf",
    "Inter-Regular.ttf",
    "Syne-Bold.ttf",
    "Syne-ExtraBold.ttf",
    "Syne-Medium.ttf",
    "Syne-Regular.ttf",
    "Syne-SemiBold.ttf",
  ]

  await Promise.all(
    fontNames.map((fileName) =>
      fs.readFile(path.join(path.resolve(process.cwd(), "public"), fileName))
    )
  )

  const imageNames = [
    "welcome1.png",
    "welcome2.png",
    "welcome3.png",
    "welcome4.png",
    "termsOrStart.png",
    "attributes1.png",
    "termsOrStart.png",
    "failedRequest.png",
    "extractionExplanation.png",
    "whitelisted.png",
    "failedRequest.png",
    "blacklisted.png",
    "failedRequest.png",
    "outOfNfts.png",
    "congrats.png",
    "datalatteExplanation.png",
  ]

  imageNames.forEach((fileName) => {
    fs.readFile(
      path.join(path.resolve(process.cwd(), "public", "images"), fileName)
    )
  })
}
