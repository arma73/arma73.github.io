import styled from "styled-components";
import { Container } from "_components/grid";

export const Contacts = styled(Container)`
    justify-content: space-around;
    align-items: center;
    padding: 1rem;
`;

export const ContactItem = styled.address`
    display: flex;
    align-items: center;
    color: #626262;
    svg {
        margin-right: 6px;
        fill: #626262;
    }
`;
