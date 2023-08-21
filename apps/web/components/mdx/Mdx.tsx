import { MdxComponents } from "./MdxComponents";
import { useMDXComponent } from "next-contentlayer/hooks";

import type { FC } from "react";

interface IMdxProps {
    code: string;
}

const Mdx: FC<IMdxProps> = ({ code }) => {
    const Component = useMDXComponent(code);

    return (
        <div className="mdx prose prose-base md:prose lg:prose-lg mx-auto dark:prose-invert">
            <Component components={MdxComponents} />
        </div>
    );
};

export default Mdx;
