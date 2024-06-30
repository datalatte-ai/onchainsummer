import { createFrames } from "frames.js/next";
import { appURL } from "../../../utils/utils";

export const frames = createFrames({
  basePath: "/examples/basic/frames",
  baseUrl: appURL(),
  debug: process.env.NODE_ENV === "development",
});
