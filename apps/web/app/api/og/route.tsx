/* eslint-disable react/no-unknown-property */
/* eslint-disable max-lines */
import { ImageResponse } from "@vercel/og";
import { ogImageSchema } from "./_validation";
import { GitHubIcon } from "#web/components/icons/SocialIcons";
import { LogoIcon } from "#web/components/icons";

import { siteConfig, SiteSocialLinks } from "#web/configs/site";

export const runtime = "edge";

// const interRegular = fetch(
//     new URL("../../../assets/fonts/Inter-Regular.woff", import.meta.url)
// ).then(res => res.arrayBuffer());

const interBold = fetch(
    new URL("../../../assets/fonts/Inter-Bold.woff", import.meta.url)
).then(res => res.arrayBuffer());

export async function GET(req: Request) {
    try {
        // const fontRegular = await interRegular;
        const fontBold = await interBold;

        const url = new URL(req.url);
        const siteUrl = new URL(siteConfig.url);
        const githubUrl = new URL(SiteSocialLinks.GITHUB);
        const githubProfileLink = githubUrl.hostname + githubUrl.pathname;

        const values = ogImageSchema.parse(
            Object.fromEntries(url.searchParams)
        );
        const heading =
            values.heading.length > 115
                ? `${values.heading.substring(0, 115)}...`
                : values.heading;
        const paint = "#fff";
        const fontSize = heading.length > 48 ? "70px" : "100px";

        return new ImageResponse(
            (
                <div
                    tw="flex relative flex-col p-12 w-full h-full items-start"
                    style={{
                        color: paint,
                        background:
                            "linear-gradient(90deg, #171c20 0%, #3a1c50 50%, #552075 70%, #682191 100%)",
                    }}>
                    <div tw="flex flex-col flex-1 pb-10">
                        <div
                            tw="flex text-xl uppercase opacity-80 font-bold tracking-tight"
                            style={{
                                fontFamily: "Inter Bold",
                                fontWeight: "normal",
                            }}>
                            {values.type}
                        </div>
                        <div
                            tw="flex leading-[1.1] text-[80px] font-bold"
                            style={{
                                fontFamily: "Inter Bold",
                                fontWeight: "bold",
                                marginLeft: "-3px",
                                fontSize,
                            }}>
                            {heading}
                        </div>
                    </div>
                    <div tw="flex mb-3">
                        <LogoIcon width={50} height={50} fill={"#fff"} />
                    </div>

                    <div tw="flex items-center w-full justify-between">
                        <span
                            tw="text-xl opacity-80"
                            style={{
                                fontFamily: "Inter Bold",
                                fontWeight: "normal",
                            }}>
                            {siteUrl.hostname}
                        </span>
                        <div
                            tw="flex items-center text-xl"
                            style={{
                                fontFamily: "Inter Bold",
                                fontWeight: "normal",
                            }}>
                            <GitHubIcon width="32" height="32" fill="#fff" />
                            <div tw="flex ml-2 opacity-80">
                                {githubProfileLink}
                            </div>
                        </div>
                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 630,
                fonts: [
                    // {
                    //     name: "Inter",
                    //     data: fontRegular,
                    //     weight: 400,
                    //     style: "normal",
                    // },
                    {
                        name: "Inter Bold",
                        data: fontBold,
                        weight: 700,
                        style: "normal",
                    },
                ],
            }
        );
    } catch (err) {
        return new Response("Failed to generate og image", {
            status: 500,
        });
    }
}
