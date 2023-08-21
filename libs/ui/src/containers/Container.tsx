import { forwardRef } from "react";
import clsx from "clsx";

import type {
    DetailedHTMLProps,
    HTMLAttributes,
    PropsWithChildren,
    PropsWithoutRef,
    ForwardRefExoticComponent,
    RefAttributes,
    FC,
} from "react";

type OuterContainerProps = PropsWithoutRef<
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>;

const OuterContainer = forwardRef<
    HTMLDivElement,
    PropsWithChildren<OuterContainerProps>
>(function OuterContainerRef({ className, children, ...props }, ref) {
    return (
        <div ref={ref} className={clsx("sm:px-8", className)} {...props}>
            <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
        </div>
    );
});

type InnerContainerProps = PropsWithoutRef<
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>;

const InnerContainer = forwardRef<
    HTMLDivElement,
    PropsWithChildren<InnerContainerProps>
>(function InnerContainerRef({ className, children, ...props }, ref) {
    return (
        <div
            ref={ref}
            className={clsx("relative px-4 sm:px-8 lg:px-12", className)}
            {...props}>
            <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
        </div>
    );
});

type ContainerProps = OuterContainerProps;

interface IContainerComponent
    extends ForwardRefExoticComponent<
        ContainerProps & RefAttributes<HTMLDivElement>
    > {
    Outer: FC<OuterContainerProps>;
    Inner: FC<InnerContainerProps>;
}

export const Container = forwardRef(function ContainerRef(
    { children, ...props },
    ref
) {
    return (
        <OuterContainer ref={ref} {...props}>
            <InnerContainer>{children}</InnerContainer>
        </OuterContainer>
    );
}) as IContainerComponent;

Container.Outer = OuterContainer;
Container.Inner = InnerContainer;
