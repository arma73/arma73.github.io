/* eslint-disable max-lines */
import Link from "next/link";
import { cva } from "class-variance-authority";
import { cn } from "@lib/utils";
import { LoadingFormBtn } from "./LoadingBtn";

import type {
    FC,
    PropsWithChildren,
    AnchorHTMLAttributes,
    ButtonHTMLAttributes,
} from "react";
import type { LinkProps } from "next/link";
import type { VariantProps } from "class-variance-authority";

export type ButtonVariantProps = VariantProps<typeof btnVariants>;
const btnVariants = cva(
    [
        "relative cursor-pointer",
        "inline-flex items-center justify-center rounded-md outline-offset-2 transition active:transition-none",
        "gap-2 text-sm",
    ],
    {
        variants: {
            vtype: {
                primary: `
          bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-800 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700
          text-zinc-100 active:text-zinc-100/70 dark:active:text-zinc-100/70
          font-semibold
        `,
                secondary: `
          bg-zinc-50 hover:bg-zinc-100 active:bg-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:active:bg-zinc-800/50
          text-zinc-900 active:text-zinc-900/60 dark:text-zinc-300 dark:active:text-zinc-50/70
          font-medium
        `,
                bordered: `
          text-zinc-900 active:text-zinc-900/60 dark:text-zinc-300 dark:active:text-zinc-50/70
          ring-1 ring-consistent hover:ring-consistent-accent
        `,
            },
            vsize: {
                none: "",
                md: "py-2 px-3",
            },
            disabled: {
                true: "opacity-50 cursor-not-allowed pointer-events-none",
            },
        },
    }
);

export type LoadingVariantProps = VariantProps<typeof loadingVariants>;
const loadingVariants = cva("", {
    variants: {
        loading: {
            default: "",
            true: `animate-spin`,
        },
    },
});

type ButtonBaseProps = ButtonVariantProps & LoadingVariantProps;

interface ILinkButtonProps
    extends Omit<
            AnchorHTMLAttributes<HTMLAnchorElement>,
            keyof Omit<LinkProps, "href"> | keyof ButtonBaseProps
        >,
        Omit<LinkProps, "href" | keyof ButtonBaseProps> {
    as: "link";
    href: string;
}

interface INativeButtonProps
    extends Omit<
        ButtonHTMLAttributes<HTMLButtonElement>,
        keyof ButtonBaseProps
    > {
    as: "button";
}

type ButtonProps = ButtonBaseProps & (ILinkButtonProps | INativeButtonProps);

const Button: FC<PropsWithChildren<ButtonProps>> = ({
    vtype,
    vsize = "md",
    disabled,
    className,
    loading,
    children,
    ...props
}) => {
    const _cn = cn(
        btnVariants({ vtype, disabled: loading ? true : disabled, vsize }),
        className
    );

    if (loading) {
        return (
            <div className={_cn}>
                {<LoadingFormBtn className="absolute" />}
                <div className="invisible">{children}</div>
            </div>
        );
    }

    return props.as === "link" ? (
        <Link className={_cn} {...props}>
            {children}
        </Link>
    ) : (
        <button className={_cn} {...props}>
            {children}
        </button>
    );
};

export default Button;
