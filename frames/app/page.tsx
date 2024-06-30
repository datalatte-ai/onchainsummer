import { fetchMetadata } from "frames.js/next"
import type { Metadata } from "next"
import Link from "next/link"
import { appURL } from "./utils/utils"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Datalatte",
    description: "let the data revolution begin",
    other: {
      ...(await fetchMetadata(new URL("/frames", appURL()))),
    },
  }
}

// This is a react server component only
export default async function Home() {
  // then, when done, return next frame
  return (
    <div className="p-4">
      Datalatte frames. Please visit this url from within a warpcast frame.
      Otherwise you can find us at{" "}
      <Link className="underline" href={"https://datalatte.com"}>
        our homepage
      </Link>
      ,{" "}
      <Link className="underline" href={"https://docs.datalatte.com"}>
        our litepaper
      </Link>{" "}
      or can say hello
      <Link className="underline" href={"https://warpcast.com/datalatte"}>
        @datalatte
      </Link>
    </div>
  )
}
