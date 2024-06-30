import { fetchMetadata } from "frames.js/next"
import type { Metadata } from "next"
import Link from "next/link"
import { appURL } from "./utils/utils"
import { DebugLink } from "./components/DebugLink"

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
      frames.js starter kit. The Template Frame is on this page, it&apos;s in
      the html meta tags (inspect source). <DebugLink /> or see{" "}
      <Link href="/examples" className="underline">
        other examples
      </Link>
    </div>
  )
}
