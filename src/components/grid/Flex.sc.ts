import styled from "styled-components";
import { TypeContainer } from "./Responsive";

const Flex = styled.div.attrs(
    ({ direction = "row", ...props }: TypeContainer) => {
        const span = props.span || "100%";
        const xsmall = props.xsmall || "100%";
        const small = props.small || "100%";
        const medium = props.medium || span;
        const large = props.large || span;
        const xlarge = props.xlarge || span;
        return {
            ...props,
            span,
            xsmall,
            medium,
            large,
            small,
            xlarge,
            direction,
        };
    }
)`
    display: flex;
    flex: 0 0 ${({ span }: TypeContainer) => span};
    flex-wrap: wrap;
    flex-direction: ${({ direction }: TypeContainer) => direction};
    @media only screen and (max-width: 600px) {
        flex: 0 0 ${({ xsmall }: TypeContainer) => xsmall};
    }
    @media only screen and (min-width: 600px) {
        flex: 0 0 ${({ small }: TypeContainer) => small};
    }
    @media only screen and (min-width: 768px) {
        flex: 0 0 ${({ medium }: TypeContainer) => medium};
    }
    @media only screen and (min-width: 992px) {
        flex: 0 0 ${({ large }: TypeContainer) => large};
    }
    @media only screen and (min-width: 1200px) {
        flex: 0 0 ${({ xlarge }: TypeContainer) => xlarge};
    }
`;

export default Flex;
