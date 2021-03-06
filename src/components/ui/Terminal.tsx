import { FC, useRef, useEffect, SVGProps } from "react";
import { UnifiedLink } from "_components/links";

import "./Terminal.scss";

interface TerminalProps {
    "href": string;
    "Icon": FC<SVGProps<SVGSVGElement>>;
    "title": string;
}

const Terminal: FC<TerminalProps> = ({ children, href, Icon, title }) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let timeId: NodeJS.Timeout | undefined;
        const caretToggle = (): void => {
            if (ref.current?.classList.contains("blink")) {
                ref.current.classList.remove("blink");
            } else {
                ref.current?.classList.add("blink");
            }
        };

        if (ref) {
            timeId = global.setInterval(caretToggle, 500);
        }

        return () => {
            if (timeId) {
                clearInterval(timeId);
            }
        };
    }, []);

    return (
        <div id="term" className="term">
            <input className="term-input-hide" />
            <div className="term-bar">
                <div className="term-winctrl">
                    <span className="term-btn close"></span>
                    <span className="term-btn minimise"></span>
                    <span className="term-btn maximise"></span>
                </div>
                <UnifiedLink to={href} target="_blank" className="term-bar-gh">
                    <Icon />
                </UnifiedLink>
            </div>
            <div className="term-cont">
                <div className="term-line">
                    <span className="term-prompt">~/ # </span>
                    <span className="term-cmd current">{title}</span>
                    {children}
                    <span className="term-prompt">
                        <br /> <br /> ~/ #{" "}
                    </span>
                    <span className="term-caret" ref={ref}>
                        &#x2588;
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Terminal;
