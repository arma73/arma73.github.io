import clsx from "clsx";

import type { ReactNode, FC } from "react";

interface ICalloutProps {
    icon?: string;
    children?: ReactNode;
    type?: "info" | "warning" | "danger";
}

const Callout: FC<ICalloutProps> = ({
    children,
    icon,
    type = "info",
    ...props
}) => {
    return (
        <div
            className={clsx(
                "my-6 flex items-start rounded-md border border-l-4 p-4",
                {
                    "border-inline-info bg-slate-50 dark:bg-[#2b3039]":
                        type === "info",
                    "border-inline-error bg-[#fcbfbf3b] dark:bg-[#382b2b65]":
                        type === "danger",
                    "border-inline-warn bg-[#ffcda62e] dark:bg-[#38312bb9]":
                        type === "warning",
                }
            )}
            {...props}>
            {icon && <span className="mr-4 text-2xl">{icon}</span>}
            <div>{children}</div>
        </div>
    );
};

export default Callout;
