/* eslint-disable max-lines */
import {
    CSSProperties,
    useEffect,
    useImperativeHandle,
    useRef,
    FC,
    SVGProps,
} from "react";
import { TypeContainer } from "_components/grid/Responsive";
import View from "_components/grid/View";
import ReactPortal from "_components/grid/Portal";
import { useBlockScroll } from "_hooks/useBlockScroll";
import { keyboard } from "_settings/keyboard";
import { useOnClickOutside } from "_hooks/useOnClickOutside";
import ModalView from "./ModalView";
import ModalContent from "./ModalContent";
import Close from "./Close";
import { HtmlTag } from "_interfaces/document.interface";
import { RefHtmlDivElement } from "_interfaces/reference.interface";

interface ModalProps
    extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
    "htmlTag"?: HtmlTag;
    "closeColor"?: string;
    "onClose": FunctionOf;
    "title"?: React.ReactNode | Element;
    "footer"?: React.ReactNode;
    "closeIcon"?: FC<SVGProps<SVGSVGElement>>;
    "visible": boolean;
    "closeOnMask"?: boolean;
    "children": React.ReactNode;
    "animationTime"?: number;
    "width"?: string | number;
    "headerProps"?: Partial<TypeContainer>;
    "bodyProps"?: Partial<TypeContainer>;
    "closeOnEsc"?: boolean;
    "maskPaddingVertical"?: string;
    "footerProps"?: Partial<TypeContainer>;
}

const defaultModalPartProps = {
    "span": "100%",
    "style": {
        "padding": "1rem",
    } as CSSProperties,
} as Partial<TypeContainer>;

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(function ModalRef(
    {
        visible,
        width = "60%",
        closeOnMask = true,
        footer,
        closeIcon,
        onClose,
        maskPaddingVertical = "3rem",
        headerProps = defaultModalPartProps,
        bodyProps = defaultModalPartProps,
        footerProps = defaultModalPartProps,
        title,
        closeColor,
        closeOnEsc = true,
        children,
        animationTime = 950,
    },
    externalRef
) {
    const ref = useRef<RefHtmlDivElement>(null);

    useImperativeHandle<RefHtmlDivElement, RefHtmlDivElement>(
        externalRef,
        () => ref.current
    );
    useBlockScroll(visible);

    const onClickMask = (e: Event) => {
        if (closeOnMask && visible) {
            e.stopPropagation();
            onClose();
        }
    };

    useOnClickOutside(ref, onClickMask);

    useEffect(() => {
        const toggleVisibility = (e: KeyboardEvent) => {
            if (e.keyCode === keyboard.esc && closeOnEsc && visible) {
                onClose();
            }
        };
        window.addEventListener("keydown", toggleVisibility);
        return () => window.removeEventListener("keydown", toggleVisibility);
    }, [closeOnEsc, onClose, visible]);

    const onModalClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        event.persist();
        event.stopPropagation();
    };

    const headerViewProps = {
        ...headerProps,
        "style": {
            "borderBottom": "1px solid #12121270",
            "justifyContent": "space-between",
            ...defaultModalPartProps.style,
            ...headerProps.style,
        },
    };
    const bodyViewProps = {
        ...bodyProps,
        "style": { ...defaultModalPartProps.style, ...bodyProps.style },
    };
    const footerViewProps = {
        ...footerProps,
        "style": {
            "textAlign": "right" as const,
            ...defaultModalPartProps.style,
            ...footerProps.style,
        },
    };

    return (
        <ReactPortal>
            <ModalView
                visible={visible}
                maskPaddingVertical={maskPaddingVertical}
                speed={animationTime}
            >
                <ModalContent ref={ref} onClick={onModalClick} width={width}>
                    <View {...headerViewProps}>
                        <View span="90%" xsmall="90%" small="90%">
                            {title}
                        </View>
                        <View
                            className="justify-end"
                            span="10%"
                            xsmall="3%"
                            small="3%"
                        >
                            <Close
                                color={closeColor}
                                onClick={onClose}
                                icon={closeIcon}
                            />
                        </View>
                    </View>
                    <View {...bodyViewProps}>{children}</View>
                    {!!footer && <View {...footerViewProps}>{footer}</View>}
                </ModalContent>
            </ModalView>
        </ReactPortal>
    );
});

export default Modal;
