/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import { appURL } from "../../../utils/utils"
export default function Scoring({ data }: { data: any }) {
    return (
        <div
            style={{
                backgroundColor: "#000",
                color: "#fff",
                fontFamily: "'Syne', sans-serif",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "column",
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
                    textAlign: "center",
                    backgroundColor: "#000",
                    borderRadius: "10px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    display: "flex",
                    flexDirection: "row",
                    gap: "20px",
                    position: "relative",
                    padding: "20px",
                }}
            >
                <div style={{ marginBottom: "10px", display: "flex" }}>
                    <img
                        src={`${appURL()}/image_bot.png`}
                        alt="Logo"
                        style={{
                            width: "50px",
                            height: "50px",
                        }}
                    />
                </div>
                <div
                    style={{
                        fontFamily: "syne-extra",
                        fontSize: "17px",
                        fontWeight: "bold",
                        display: "flex",
                        flexDirection:"column",
                        justifyContent:"center",
                        alignItems:"center"
                    }}
                >
                    {"Top 1010 will be able to mint a dataBarista 1010 - IGA"}
                </div>
                
            </div>


            <div style={{
                    width: "100%",
                    maxWidth: "500px",
                    textAlign: "center",
                    backgroundColor: "#000",
                    borderRadius: "10px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: "20px",
                    position: "relative",
                    padding: "10px",
                    fontFamily: "syne-extra",
                    fontSize:"22px"
                }}>
                    <div style={{justifyContent:"center", textAlign:"center"}}>
                        Your Rank:
                    </div>
                    <div style={{justifyContent:"center", textAlign:"center", display:"flex"}}>
                        <span style={{fontSize:"34px", textAlign:"center", color:"#72DFA7", top:-10}}>{data["rank"]}</span>/{data["total_users"]}
                    </div>
                    <div style={{justifyContent:"center", textAlign:"center", color:"#D1AFF9", fontSize:"22px", display:"flex", fontWeight: "bold"}}>
                        (Your twin score:{data["score"]} XP)
                    </div>
                </div>
            <div style={{
                    width: "100%",
                    maxWidth: "500px",
                    textAlign: "center",
                    backgroundColor: "#000",
                    borderRadius: "10px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    display: "flex",
                    flexDirection: "row",
                    gap: "20px",
                    position: "relative",
                    padding: "20px",
                }}>
                    <div
                        style={{
                            fontFamily: "syne-extra",
                            fontSize: "15px",
                            fontWeight: "bold",
                            display: "flex",
                            textAlign: "center",
                            flexDirection:"column",
                            top: -30
                        }}
                    >
                        <p style={{fontSize:"24px", fontWeight: "bold", textAlign: "center", justifyContent:"center"}}>Wanna move up?</p>
                        {"Cast as usual and be authentic. We Calculate XP daily and add it to your profile. Refresh to see your progress!"}
                    </div>
                </div>
        </div>
    )
}
