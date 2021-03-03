import { FC } from "react";
import styled from "styled-components";
import Modal from "_components/modal";
import { Container } from "_components/grid";
import SkillItem from "./SkillItem";
import * as S from "_components/styled";

interface ShowSkillsProps {
    "onClose": () => void;
    "visible": boolean;
}

const Skills = styled(Container)`
    justify-content: space-around;
    margin: 10px;
    flex: initial;
`;

const ShowSkills: FC<ShowSkillsProps> = ({ onClose, visible }) => (
    <Modal
        title={<S.Title>Skills</S.Title>}
        onClose={onClose}
        visible={visible}
    >
        <Container>
            <S.Name>Software Development</S.Name>
            <Skills>
                <SkillItem icon="javascript-logo" performance={5} />
                <SkillItem icon="typescript-logo" performance={4} />
                <SkillItem icon="java-logo" performance={2} />
                <SkillItem icon="apollographql-logo" performance={4} />
                <SkillItem icon="graphql-logo" performance={4} />
            </Skills>
        </Container>
        <Container>
            <S.Name>Front End</S.Name>
            <Skills>
                <SkillItem icon="html-logo" performance={5} />
                <SkillItem icon="css-logo" performance={5} />
                <SkillItem icon="sass-logo" performance={5} />
                <SkillItem icon="postcss-logo" performance={5} />
                <SkillItem icon="react-logo" performance={5} />
                <SkillItem icon="redux-logo" performance={4} />
                <SkillItem icon="redux-saga-logo" performance={3} />
                <SkillItem icon="styled-components-logo" performance={4} />
                <SkillItem icon="next-js-logo" performance={3} />
                <SkillItem icon="antd-logo" performance={4} />
                <SkillItem icon="jquery-logo" performance={2} />
            </Skills>
        </Container>
        <Container>
            <S.Name>Back End</S.Name>
            <Skills>
                <SkillItem icon="node-js-logo" performance={4} />
                <SkillItem icon="ts-node-logo" performance={4} />
                <SkillItem icon="express-logo" performance={4} />
                <SkillItem icon="mongodb-logo" performance={2} />
                <SkillItem icon="postgresql-logo" performance={3} />
                <SkillItem icon="typeorm-logo" performance={4} />
                <SkillItem icon="sequelize-logo" performance={3} />
            </Skills>
        </Container>
        <Container>
            <S.Name>Tools</S.Name>
            <Skills>
                <SkillItem icon="webpack-logo" performance={4} />
            </Skills>
        </Container>
        <Container>
            <S.Name>IDEA</S.Name>
            <Skills>
                <SkillItem icon="visual-studio-code-logo" performance={5} />
                <SkillItem icon="intellij-idea-logo" performance={2} />
            </Skills>
        </Container>
        <Container>
            <S.Name>System & Networking</S.Name>
            <Skills>
                <SkillItem icon="git-logo" performance={4} />
                <SkillItem icon="github-logo" performance={4} />
                <SkillItem icon="gitlab-logo" performance={3} />
                <SkillItem icon="gitkraken-logo" performance={3} />
                <SkillItem icon="npm-logo" performance={4} />
                <SkillItem icon="linux-logo" performance={2} />
                <SkillItem icon="cloudinary-logo" performance={3} />
                <SkillItem icon="twilio-logo" performance={3} />
                <SkillItem icon="stripe-logo" performance={3} />
            </Skills>
        </Container>
    </Modal>
);

export default ShowSkills;
