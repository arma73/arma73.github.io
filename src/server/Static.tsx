import ReactDOMServer from "react-dom/server";
import { Compilation } from "webpack";
import { StaticRouter } from "react-router-dom";
import Markup from "_components/markup";
import { Content } from "_interfaces/content.interface";

export interface Locals {
    "content": Content;
    "path": string;
    "assets": { [K: string]: string };
    "webpackStats": {
        "compilation": Compilation;
    };
}

type StaticSignature = (locals: Locals) => string;

const Static: StaticSignature = locals => {
    const renderedHtml: string = ReactDOMServer.renderToString(
        <StaticRouter location={locals.path} context={{}}>
            <Markup locals={locals} />
        </StaticRouter>
    );

    return "<!DOCTYPE html>" + renderedHtml;
};

export default Static;
