import { FC } from "react";
import styled from "styled-components";
import { Container } from "_components/grid";
import Icon from "_components/icon";
import Modal from "_components/modal";
import * as S from "_components/styled";

const PassionItems = styled(Container)`
    justify-content: space-around;
    flex: inherit;
`;

interface ShowPassionsProps {
    "onClose": () => void;
    "visible": boolean;
}

const ShowPassions: FC<ShowPassionsProps> = ({ onClose, visible }) => (
    <Modal
        title={<S.Title>Passions</S.Title>}
        onClose={onClose}
        visible={visible}
    >
        <PassionItems>
            <Icon icon="travel" path="passions" />
            <Icon icon="compose" path="passions" />
            <Icon icon="book" path="passions" />
            <Icon icon="sport" path="passions" />
            <Icon icon="coffee" path="passions" />
            <Icon icon="music" path="passions" />
        </PassionItems>
    </Modal>
);

export default ShowPassions;
