/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React from "react"
import { appURL } from "../../../utils/utils"

export default function Attributes({ data }: { data: any }) {
    let len_char = 0
    for (let i=0;i<data.Roles.length;i++) {
        if (data.Roles[i]?.role) {
            len_char = len_char + data.Roles[i].role.length
        } else {
            len_char = len_char + data.Roles[i].name.length
        }
    }
    for (let i=0;i<data.Inventory.length;i++) {
        if (data.Inventory[i]?.item) {
            len_char = len_char + data.Inventory[i].item.length
        } else {
            len_char = len_char + data.Inventory[i].name.length
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
        padding: "10px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          maxHeight: "500px",
          backgroundColor: "#000",
          borderRadius: "10px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          position: "relative",
          padding: "5px",
          right: 30,
          top: len_char > 65 ? 0 : -50,
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
              marginBottom: "5px",
            }}
          >
            Attributes
          </span>
          {data.Attributes.map(
            (
              attribute: {
                attribute: string;
                name: string;
                score: number;
              },
              index: number
            ) => (
              <div
                key={attribute.attribute || attribute.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "5px",
                  fontSize: "16px",
                }}
              >
                <span
                  style={{
                    color: "#000",
                    backgroundColor: "#D1AFF9",
                    padding: "5px 10px",
                    borderRadius: "10px",
                    textAlign: "center",
                    flex: "1.5",
                  }}
                >
                  {attribute.attribute || attribute.name}
                </span>
                <div
                  style={{
                    display: "flex",
                    gap: "2px",
                    justifyContent: "flex-end",
                    flex: "3",
                    marginLeft: "10px",
                    left: 80,
                  }}
                >
                  {Array.from({ length: 10 }, (_, i) => (
                    <div
                      key={i}
                      style={{
                        width: "23px",
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
                    left: 80,
                  }}
                >
                  {`${attribute.score}/10`}
                </span>
              </div>
            )
          )}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <span
            style={{
              fontWeight: "bold",
              fontFamily: "syne-extra",
              fontSize: "18px",
            }}
          >
            Roles & Skills
          </span>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "5px",
              fontSize: "16px",
              color: "#000",
            }}
          >
            {data.Roles.map((role: { role: string; name: string }) => (
              <span
                key={role.role || role.name}
                style={{
                  backgroundColor: "#D1AFF9",
                  padding: "5px 10px",
                  borderRadius: "10px",
                  whiteSpace: "nowrap",
                  fontWeight: "600",
                }}
              >
                {role.role || role.name}
              </span>
            ))}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <span
            style={{
              fontWeight: "bold",
              fontFamily: "syne-extra",
              fontSize: "18px",
            }}
          >
            Inventory
          </span>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "5px",
              color: "#000",
              fontSize: "16px",
            }}
          >
            {data.Inventory.map((item: { item: string; name: string }) => (
              <span
                key={item.item || item.name}
                style={{
                  backgroundColor: "#D1AFF9",
                  padding: "5px 10px",
                  borderRadius: "10px",
                  whiteSpace: "nowrap",
                  fontWeight: "600",
                }}
              >
                {item.item || item.name}
              </span>
            ))}
          </div>
        </div>
        <img
          src={`${appURL()}/image_coffee.png`}
          alt="coffee"
          style={{
            position: "absolute",
            top: "200px",
            left: len_char > 65 ? "300px" : "350px",
            height: "170px",
            width: "170px",
            maxWidth: "100%",
          }}
        />
        <img
          src={`${appURL()}/logo.png`}
          alt="logo"
          style={{
            position: "absolute",
            bottom: len_char > 65 ? -10 : -100,
            right: "-60px",
            height: "20px",
            maxWidth: "100%",
          }}
        />
      </div>
    </div>
  )
}
