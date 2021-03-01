import styled from "styled-components";
import { Container } from "_components/grid";

export const Title = styled.h1`
    color: #7d7d7d;
    font-size: 22px;
    font-weight: 400;
    text-transform: uppercase;
    margin: 0;
`;

export const Name = styled.h2`
    margin: 5px 0 0;
    font-size: 35px;
    font-weight: 600;
    color: #222f5c;
`;

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

export const Text = styled.p`
    margin-top: 1em;
    font-size: 18px;
    font-weight: 500;
    color: #5e6788;
    text-align: left;
    line-height: 1.5em;
`;
