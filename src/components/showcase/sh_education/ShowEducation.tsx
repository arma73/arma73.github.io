import { FC } from "react";
import styled from "styled-components";
import { UnifiedLink } from "_components/links";
import { Container } from "_components/grid";
import EducationSVG from "_theme/icons/education.svg";
import Modal from "_components/modal";
import * as S from "_components/styled";

const StyledEducationItem = styled(Container)`
    justify-content: center;
    align-items: center;
    padding: 10px;

    .university {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI";
        flex: 1 0 60%;
        text-decoration: underline;
        font-weight: 500;
        text-align: justify;
        margin-left: 30px;
    }
`;

interface ShowEducationProps {
    "onClose": () => void;
    "visible": boolean;
}

const ShowEducation: FC<ShowEducationProps> = ({ onClose, visible }) => (
    <Modal
        title={<S.Title>Education</S.Title>}
        onClose={onClose}
        visible={visible}
        width="50%"
    >
        <StyledEducationItem>
            <EducationSVG width="50px" />
            <UnifiedLink
                to="https://polytech.am/"
                className="university"
                target="_blank"
            >
                <span>
                    Bachelor of Architecture (B.Arch.), Computer science |
                    National Polytechnic University of Armenia
                </span>
            </UnifiedLink>
        </StyledEducationItem>
    </Modal>
);

export default ShowEducation;
