import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Markup from "_components/markup";
import { Content } from "_interfaces/content.interface";

type StaticSignature = (locals: Content) => string;

const Static: StaticSignature = locals => {
    const renderedHtml: string = ReactDOMServer.renderToString(
        <StaticRouter location={locals.path} context={{}}>
            <Markup locals={locals} />
        </StaticRouter>
    );

    return "<!DOCTYPE html>" + renderedHtml;
};

export default Static;
