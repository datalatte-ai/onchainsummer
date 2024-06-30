/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React from "react"
import { appURL } from "../../../utils/utils"

export default function Arguments3({ data }: { data: any }) {
    let len_char = 0
    if (data.Inventory) {
        for (let i=0; i < data.Inventory.length ; i++) {
            len_char = len_char + data.Inventory[i].argument.length
        }
    } 
    console.log(len_char)
  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "#fff",
        fontFamily: "'Syne', sans-serif",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        height: "100vh",
        margin: 0,
        width: "100vw",
        boxSizing: "border-box",
        padding: "10px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          backgroundColor: "#000",
          borderRadius: "10px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          position: "relative",
          padding: "10px",
          right: 5,
          top: -10,
          maxHeight: "500px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <span
            style={{
              fontFamily: "syne-extra",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            Digital twin&apos;s arguments
          </span>
          {data.Inventory.map(
            (
              item: {
                item: string
                name: string
                argument: string
              },
              index: number
            ) => (
              <div
                key={item.item || item.name}
                style={{ display: "flex", flexDirection: "column", gap: "5px" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontSize: len_char > 710 ? "14px" : "16px",
                    marginBottom: "5px",
                  }}
                >
                  <span
                    style={{
                      color: "#000",
                      backgroundColor: "#D1AFF9",
                      padding: "5px 10px",
                      borderRadius: "10px",
                      textAlign: "center",
                    }}
                  >
                    {item.item || item.name}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: len_char > 710 ? "10px" : "14px",
                    color: "#fff",
                    marginTop: "-5px",
                    textAlign: "left",
                    paddingLeft: "10px",
                    wordWrap: "break-word",
                  }}
                >
                  {item.argument}
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <img
        src={`${appURL()}/logo.png`}
        alt="logo"
        style={{
          position: "absolute",
          bottom: 10,
          right: 10,
          height: "20px",
          maxWidth: "100%",
        }}
      />
    </div>
  )
}
