/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next"
import { container } from "../utils/styles"
import { Pages } from "../utils/types"
import { SideeffectResponse } from "./sideeffects"
import { ImageResponse } from "@vercel/og"
import * as fs from "node:fs/promises"
import * as path from "node:path"

const syneScriptFont = fs.readFile(
  path.join(path.resolve(process.cwd(), "public"), "syne.regular.ttf")
)

const syneScriptFontData = await syneScriptFont

export const images = {
  [Pages.Welcome1]: "https://i.imgur.com/B0sEfNF.png",
  [Pages.Welcome2]: "https://i.imgur.com/Q7LgO6E.png",
  [Pages.Welcome3]: "https://i.imgur.com/GWKF5sM.png",
  [Pages.Welcome4]: "https://i.imgur.com/FQnr20L.png",
  [Pages.TermsOrStart]: "https://i.imgur.com/y6Em6lf.png",
  [Pages.Extraction]: "https://i.imgur.com/XMvVxd1.png",
  [Pages.ExtractionWaiting]: "https://i.imgur.com/XMvVxd1.png",
  [Pages.ExtractionFailed]: "https://i.imgur.com/gfEPwUC.png",
  [Pages.ExtractionExplanation]: "https://i.imgur.com/oq2y9UV.png",
  [Pages.Whitelisted]: "https://i.imgur.com/mA2SytU.png",
  [Pages.WhitelistCheckFailed]: "https://i.imgur.com/gfEPwUC.png",
  [Pages.Blacklisted]: "https://i.imgur.com/nKetR5C.png",
  [Pages.AllNftsSoldFailed]: "https://i.imgur.com/gfEPwUC.png",
  [Pages.OutOfNfts]: "https://i.imgur.com/t8DVztq.png",
  [Pages.Congrats]: "https://i.imgur.com/zihftss.png",
  [Pages.DatalatteExplanation]: "https://i.imgur.com/BsxklUJ.png",
}

const DATALATTE_WARPCAST_PROFILE = "https://warpcast.com/datalatte"
const DATALATTE_HOMEPAGE_URL = "https://datalatte.com"
const DATALATTE_DOCS_URL = "https://docs.datalatte.com"
const DATALATTE_TERMS_URL = "https://www.datalatte.com/terms"

const DUDEAMIR_WARPCAST_PROFILE = "https://warpcast.com/dudeamir.eth"
const TOBIAS_WARPCAST_PROFILE = "https://warpcast.com/caruso33"

const OPENSEA_COLLECTION_LINK = "https://opensea.com"
const WARPCAST_COMPOSE_SHARE_TEXT =
  "https://warpcast.com/~/compose?text=Just+created+my+digital+twin+and+whitelisted+for+dataBarista+NFT+with+%40datalatte.+🤖☕+%E2%80%A8Get+your+personal+AI+agent+and+fight+back+against+the+AI+monopolies!&embeds[]=https://databarista.datalatte.com"

export async function getContent(
  page: Pages,
  counter: number,
  _sideeffectResponse?: SideeffectResponse
) {
  if (page === Pages.Welcome1) {
    return {
      ...(await getImageContent(page)),
      buttons: [
        <Button
          action="post"
          target={{ pathname: "/", query: { pageIndex: Pages.Welcome2 } }}
        >
          ✊🏽 Begin Your Journey
        </Button>,
      ],
      state: { counter: counter },
    }
  }

  if (page === Pages.Welcome2) {
    return {
      ...(await getImageContent(page)),
      buttons: [
        <Button
          action="post"
          target={{ pathname: "/", query: { pageIndex: Pages.TermsOrStart } }}
        >
          🛠️ Create Your Digital Twin
        </Button>,
        <Button
          action="post"
          target={{ pathname: "/", query: { pageIndex: Pages.Welcome3 } }}
        >
          📖 Continue Story
        </Button>,
      ],
      state: { counter: counter },
    }
  }

  if (page === Pages.Welcome3) {
    return {
      ...(await getImageContent(page)),
      buttons: [
        <Button
          action="post"
          target={{ pathname: "/", query: { pageIndex: Pages.TermsOrStart } }}
        >
          🛠️ Create Your Digital Twin
        </Button>,
        <Button
          action="post"
          target={{ pathname: "/", query: { pageIndex: Pages.Extraction } }}
        >
          📖 Continue Story
        </Button>,
      ],
      state: { counter: counter },
    }
  }

  if (page === Pages.Welcome4) {
    return {
      ...(await getImageContent(page)),
      buttons: [
        <Button
          action="post"
          target={{ pathname: "/", query: { pageIndex: Pages.TermsOrStart } }}
        >
          🛠️ Create Your Digital Twin
        </Button>,
        <Button
          action="post"
          target={{ pathname: "/", query: { pageIndex: Pages.TermsOrStart } }}
        >
          📖 Continue Story
        </Button>,
      ],
      state: { counter: counter },
    }
  }

  if (page === Pages.TermsOrStart) {
    return {
      ...(await getImageContent(page)),
      buttons: [
        <Button action="link" target={DATALATTE_TERMS_URL}>
          📜 Terms & Conditions
        </Button>,
        <Button
          action="post"
          target={{ pathname: "/", query: { pageIndex: Pages.Extraction } }}
        >
          🔄 Agree & Refresh to Start
        </Button>,
      ],
      state: { counter: counter },
    }
  }

  if (page === Pages.Extraction || page === Pages.ExtractionWaiting) {
    return {
      ...(await getImageContent(page)),
      buttons: [
        <Button
          action="post"
          target={{
            pathname: "/",
            query: { pageIndex: Pages.ExtractionExplanation },
          }}
        >
          {page === Pages.ExtractionWaiting
            ? "🔄 Refresh to Check Progress"
            : "🔐 Store your digital Twin"}
        </Button>,
      ],
      state: { counter: counter },
    }
  }

  if (
    page === Pages.ExtractionFailed ||
    page === Pages.AllNftsSoldFailed ||
    page === Pages.WhitelistCheckFailed
  ) {
    return {
      ...(await getImageContent(page)),
      buttons: [
        <Button action="link" target={OPENSEA_COLLECTION_LINK}>
          Opensea: dataBarista-IGA
        </Button>,
        <Button action="link" target={DATALATTE_WARPCAST_PROFILE}>
          👉🏼 @datalatte
        </Button>,
        <Button
          action="post"
          target={{
            pathname: "/",
            query: { pageIndex: Pages.DatalatteExplanation },
          }}
        >
          ☕️ What is datalatte?
        </Button>,
        <Button
          action="post"
          target={{
            pathname: "/",
            query: { pageIndex: Pages.Welcome1 },
          }}
        >
          🔄 Restart
        </Button>,
      ],
      state: { counter: counter },
    }
  }

  if (page === Pages.ExtractionExplanation) {
    return {
      ...(await getImageContent(page)),
      buttons: [
        <Button
          action="post"
          target={{ pathname: "/", query: { pageIndex: Pages.Whitelisted } }}
        >
          🪙 Mint a dataBarista NFT
        </Button>,
      ],
      state: { counter: counter },
    }
  }

  if (page === Pages.Whitelisted) {
    return {
      ...(await getImageContent(page)),
      buttons: [
        <Button
          action="post"
          target={{ pathname: "/", query: { pageIndex: Pages.Congrats } }}
        >
          🔄 Refresh
        </Button>,
      ],
      state: { counter: counter },
    }
  }

  if (page === Pages.Blacklisted) {
    return {
      ...(await getImageContent(page)),
      buttons: [
        <Button action="link" target={OPENSEA_COLLECTION_LINK}>
          Opensea: dataBarista-IGA
        </Button>,
        <Button action="link" target={DATALATTE_WARPCAST_PROFILE}>
          👉🏼 @datalatte
        </Button>,
        <Button
          action="post"
          target={{
            pathname: "/",
            query: { pageIndex: Pages.DatalatteExplanation },
          }}
        >
          ☕️ What is datalatte?
        </Button>,
        <Button action="link" target={WARPCAST_COMPOSE_SHARE_TEXT}>
          🔄 Share
        </Button>,
      ],
      state: { counter: counter },
    }
  }

  if (page === Pages.OutOfNfts) {
    return {
      ...(await getImageContent(page)),
      buttons: [
        <Button action="link" target={OPENSEA_COLLECTION_LINK}>
          Opensea: dataBarista-IGA
        </Button>,
        <Button action="link" target={DATALATTE_WARPCAST_PROFILE}>
          👉🏼 @datalatte
        </Button>,
        <Button
          action="post"
          target={{
            pathname: "/",
            query: { pageIndex: Pages.DatalatteExplanation },
          }}
        >
          ☕️ What is datalatte?
        </Button>,
        <Button action="link" target={WARPCAST_COMPOSE_SHARE_TEXT}>
          🔄 Share
        </Button>,
      ],
      state: { counter: counter },
    }
  }

  if (page === Pages.Congrats) {
    return {
      ...(await getImageContent(page)),
      buttons: [
        <Button action="link" target={OPENSEA_COLLECTION_LINK}>
          Opensea: dataBarista-IGA
        </Button>,
        <Button action="link" target={DATALATTE_WARPCAST_PROFILE}>
          👉🏼 @datalatte
        </Button>,
        <Button
          action="post"
          target={{
            pathname: "/",
            query: { pageIndex: Pages.DatalatteExplanation },
          }}
        >
          ☕️ What is datalatte?
        </Button>,
        <Button action="link" target={WARPCAST_COMPOSE_SHARE_TEXT}>
          🔄 Share
        </Button>,
      ],
      state: { counter: counter },
    }
  }

  if (page === Pages.DatalatteExplanation) {
    return {
      ...(await getImageContent(page)),
      buttons: [
        <Button action="link" target={DUDEAMIR_WARPCAST_PROFILE}>
          🏗️ @dudeamir.eth
        </Button>,
        <Button action="link" target={TOBIAS_WARPCAST_PROFILE}>
          🏗️ Tobias @caruso33
        </Button>,
        <Button action="link" target={DATALATTE_HOMEPAGE_URL}>
          🌐 datalatte.com
        </Button>,
        <Button action="link" target={DATALATTE_DOCS_URL}>
          📄 Litepaper
        </Button>,
      ],
      state: { counter: counter },
    }
  }
}

export function getFallbackContent(counter: number) {
  return {
    image: (
      <div tw={container}>
        <div tw="flex">Oops, how did we end up here?</div>
      </div>
    ),
    imageOptions: { aspectRatio: "1:1" },
    buttons: [
      <Button
        action="post"
        target={{ pathname: "/", query: { pageIndex: Pages.Welcome1 } }}
      >
        🔄 Start again
      </Button>,
    ],
    state: { counter: counter },
  }
}

export async function getImageContent(page: Pages): Promise<{
  image: JSX.Element | string
  imageOptions: { aspectRatio: "1:1" }
}> {
  const imageResponse = new ImageResponse(
    (
      <div
        style={{
          backgroundColor: "#000",
          color: "#fff",
          fontFamily: "'Syne', sans-serif",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          margin: 0,
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "350px",
            padding: "20px",
            backgroundColor: "#000",
            borderRadius: "10px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              padding: "10px",
            }}
          >
            <span
              style={{
                fontWeight: "bold",
                fontSize: "1.2em",
                marginBottom: "10px",
              }}
            >
              Attributes
            </span>
            {[
              "Intelligence",
              "Degeneracy",
              "Charisma",
              "Agility",
              "Resilience",
            ].map((attribute, index) => (
              <div
                key={attribute}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ flex: "2" }}>{attribute}</span>
                <div
                  style={{
                    display: "flex",
                    gap: "2px",
                    justifyContent: "flex-end",
                    flex: "5",
                  }}
                >
                  {Array.from({ length: 10 }, (_, i) => (
                    <div
                      key={i}
                      style={{
                        width: "12px",
                        height: "10px",
                        backgroundColor:
                          i < (index + 3) * 2 ? "#a084ca" : "#3a3a3c",
                        borderRadius: "2px",
                        right: "10px",
                      }}
                    ></div>
                  ))}
                </div>
                <span
                  style={{ flex: "1", textAlign: "right" }}
                >{`${(index + 3) * 2}/10`}</span>
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              padding: "10px",
            }}
          >
            <span style={{ fontWeight: "bold" }}>Roles & Skills</span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
              {["Data Analyst", "Tech Entrepreneur"].map((role) => (
                <span
                  key={role}
                  style={{
                    backgroundColor: "#a084ca",
                    padding: "5px 10px",
                    borderRadius: "10px",
                    whiteSpace: "nowrap",
                    fontWeight: "600",
                  }}
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              padding: "10px",
            }}
          >
            <span style={{ fontWeight: "bold" }}>Inventory</span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
              {[
                "Digital Twin",
                "AI Agent",
                "Farcaster",
                "Warpcast",
                "Memecoin",
              ].map((item) => (
                <span
                  key={item}
                  style={{
                    backgroundColor: "#a084ca",
                    padding: "5px 10px",
                    borderRadius: "10px",
                    whiteSpace: "nowrap",
                    fontWeight: "600",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 350,
      height: 350,
      fonts: [
        {
          data: syneScriptFontData,
          name: "Syne",
          weight: 400,
          style: "normal",
        },
      ],
    }
  )
  const imgBuffer = await imageResponse.arrayBuffer()
  console.log("imgBuffer", imgBuffer)

  return {
    // image: `data:image/png;base64,${Buffer.from(imgBuffer).toString("base64")}`,
    // image: png.toString("base64"),
    image: images[page]!,
    imageOptions: { aspectRatio: "1:1" },
  }
}
