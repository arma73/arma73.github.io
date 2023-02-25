import { FC } from "react";
import { getPageTitle } from "_utils/getPageTitle";
import { enforceTrailingSlash } from "_utils/enforce";
import { Locals } from "_src/server/Static";

import Favicon from "_assets/images/favicon/favicon.ico";
import Logo from "_assets/images/logo/logo-on-white-bg.svg";
import OgImage from "_assets/images/icons/icon-pwa-512x512.png";

interface HeadProps {
    "locals": Locals;
}

const underConstructionStyles = `
@import url(https://fonts.googleapis.com/css?family=Roboto+Condensed:700);.ticker,.warn-text{white-space:nowrap}.ticker,.ticker-wrap{height:4rem;overflow:hidden;box-sizing:content-box}.under-construction{position:fixed;left:0;top:0;bottom:0;right:0}.canvas-container{display:flex;justify-content:center;align-items:center}.tape{font-family:"Roboto Condensed";text-transform:uppercase;width:100vw;position:fixed;bottom:30%;left:-30%;transform:rotate(30deg);user-select:none}.clearance-tape{padding:1rem;position:relative}.clearance-tape::before{content:"";position:absolute;z-index:-1;top:0;left:0;width:300%;height:100%;background:repeating-linear-gradient(-45deg,#f2a417,#f2a417 15px,#141617 15px,#141617 30px)}.warn-text{font-size:1.1em;margin-left:-10px;text-align:center}.content-block{overflow:hidden;display:block;background-color:rgba(242,165,23);width:max-content}canvas{display:block}.ticker-wrap{position:fixed;bottom:0;width:100%;background-color:rgba(#000,.9);padding-left:100%}.ticker{display:inline-block;line-height:4rem;padding-right:100%;animation-iteration-count:infinite;animation-timing-function:linear;animation-name:ticker;animation-duration:30s}.ticker__item{display:inline-block;padding:0 2rem;font-size:2rem;color:#fff}@keyframes ticker{0%{transform:translate3d(0,0,0);visibility:0}100%{transform:translate3d(-100%,0,0)}}
`;

const Head: FC<HeadProps> = ({ locals }) => {
    const { assets } = locals.webpackStats.compilation;
    const title = getPageTitle(locals.content, locals.path);
    const description = "arma73 github portfolio";

    return (
        <head>
            <meta charSet="utf-8" />
            <meta name="theme-color" content="#3d1163" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:site_name" content="arma73" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta
                property="og:description"
                name="description"
                content={description}
            />
            <meta
                property="og:image"
                content={`https://arma73.github.io${OgImage}`}
            />
            <meta property="twitter:card" content="summary" />
            <meta property="twitter:site" content="@arma73" />
            <meta property="twitter:creator" content="@arma73" />
            <meta
                property="twitter:domain"
                content="https://arma73.github.io/"
            />
            <link rel="icon" type="image/x-icon" href={Favicon} />
            {Object.keys(assets)
                .filter(asset => /\.css$/.test(asset))
                .map(path => (
                    <link key={path} rel="stylesheet" href={`/${path}`} />
                ))}
            <link rel="manifest" href="/manifest.json" />
            <link
                rel="canonical"
                href={`https://arma73.github.io${enforceTrailingSlash(
                    locals.path
                )}`}
            />
            <meta name="mobile-web-app-capable" content="yes" />
            <link rel="icon" sizes="192x192" href="/icon_192x192.png" />
            <link rel="icon" sizes="512x512" href="/icon_512x512.png" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta
                name="apple-mobile-web-app-status-bar-style"
                content="black"
            />
            <meta name="apple-mobile-web-app-title" content="arma73" />
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/icon_180x180.png"
            />
            <link rel="mask-icon" href={Logo} color="#3d1163" />
            <meta name="msapplication-TileImage" content="/icon_150x150.png" />
            <meta name="msapplication-TileColor" content="#3d1163" />
            <script src="https://unpkg.com/zdog@1/dist/zdog.dist.min.js"></script>
            <style
                dangerouslySetInnerHTML={{ "__html": underConstructionStyles }}
            />
        </head>
    );
};
export default Head;
