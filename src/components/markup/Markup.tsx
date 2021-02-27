import { FC } from "react";
import Head from "./Head";
import Body from "./Body";
import { Locals } from "_src/server/Static";

interface MarkupProps {
    "locals": Locals;
}

const Markup: FC<MarkupProps> = ({ locals }) => (
    <html lang="en">
        <Head locals={locals} />
        <Body />
    </html>
);

export default Markup;
