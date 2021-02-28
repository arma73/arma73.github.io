import { MouseEvent, forwardRef, ReactNode } from "react";

import "./ModalContent.scss";

interface ModalContentProps {
    "onClick": (event: MouseEvent<HTMLDivElement>) => void;
    "width": string | number;
    "children": ReactNode;
}

const ModalContent = forwardRef<HTMLDivElement, ModalContentProps>(
    function ModalContentRef({ children, width, onClick }, ref) {
        return (
            <div
                className="modalContent"
                style={{ width }}
                onClick={onClick}
                ref={ref}
            >
                {children}
            </div>
        );
    }
);

export default ModalContent;
