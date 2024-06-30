/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React from "react"
import { appURL } from "../../../utils/utils"

export default function Arguments1({ data }: { data: any }) {
    let len_char = 0
    if (data.Attributes) {
        for (let i=0; i < data.Attributes.length ; i++) {
            len_char = len_char + data.Attributes[i].argument.length
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
        alignItems: "center",
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
          maxHeight:"400px",
          backgroundColor: "#000",
          borderRadius: "10px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          position: "relative",
          padding: "10px",
          right: 10,
          top: -50,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <span
            style={{
              fontFamily: "syne-extra",
              fontWeight: "bold",
              fontSize: "14px",
            }}
          >
            Digital twin&apos;s arguments
          </span>
          {data.Attributes.map(
            (
              attribute: {
                attribute: string
                score: number
                name: string
                argument: string
              },
              index: number
            ) => (
              <div
                key={attribute.attribute || attribute.name}
                style={{ display: "flex", flexDirection: "column", gap: "5px" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontSize: "12px",
                    marginBottom: "5px",
                  }}
                >
                  <span
                    style={{
                      color: "#000",
                      backgroundColor: "#D1AFF9",
                      padding: "5px 10px",
                      borderRadius: "10px",
                      textAlign: "end",
                      flex: ".5",  
                    }}
                  >
                    {attribute.attribute || attribute.name}
                  </span>
                  <div
                    style={{
                      display: "flex",
                      gap: "2px",
                      justifyContent: "flex-end",
                      flex: "2",
                      marginLeft: "10px",
                      left: 110,
                    }}
                  >
                    {Array.from({ length: 10 }, (_, i) => (
                      <div
                        key={i}
                        style={{
                          width: "30px",
                          height: "10px",
                          backgroundColor:
                            i < attribute.score ? "#D1AFF9" : "#3a3a3c",
                          borderRadius: "2px",
                          marginRight: "2px",
                        }}
                      ></div>
                    ))}
                  </div>
                  <span
                    style={{
                      flex: "1",
                      textAlign: "right",
                      marginLeft: "10px",
                      left: 110,
                    }}
                  >
                    {`${attribute.score}/10`}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: len_char > 1300 ? "9px" : "12px",
                    color: "#fff",
                    marginTop: "-5px",
                    textAlign: "left",
                    paddingLeft: "10px",
                    wordWrap: "break-word",
                    lineHeight:"13px",
                  }}
                >
                  {attribute.argument}
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
