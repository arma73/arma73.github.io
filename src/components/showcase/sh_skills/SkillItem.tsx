import { FC } from "react";
import { useToggle } from "_hooks/useToggle";
import styled from "styled-components";
import Icon from "_components/icon";
import { Container } from "_components/grid";
import { IconProps } from "_components/icon";

enum Degree {
    JUNIOR = "#c52323",
    MIDDLE = "#237ec5",
    SENIOR = "#23c534",
}

interface CirleItemProps {
    "fill": boolean;
    "color": Degree;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CircleItem = styled(({ fill, color, ...props }: CirleItemProps) => (
    <div {...props} />
))`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 1px solid ${({ color }) => color};
    background-color: ${({ fill, color }) => (fill ? color : "transparent")};
`;

const CircleContainer = styled(Container)`
    justify-content: space-between;
`;

const StyleSkillItem = styled.div`
    margin: 10px;
`;

interface SkillItemProps extends IconProps {
    "performance": 1 | 2 | 3 | 4 | 5;
}

const SkillItem: FC<SkillItemProps> = ({
    performance,
    path = "skills",
    ...props
}) => {
    const { isToggled, positiveToggle } = useToggle();

    const color =
        performance < 3
            ? Degree.JUNIOR
            : performance <= 4
            ? Degree.MIDDLE
            : Degree.SENIOR;

    const performanceMap = Array(5)
        .fill(null)
        .map((_, index) => (
            <CircleItem
                key={index}
                fill={index + 1 <= performance}
                color={color}
            />
        ));

    return (
        <StyleSkillItem>
            <Icon path={path} onLoaded={positiveToggle} {...props} />
            {isToggled && <CircleContainer>{performanceMap}</CircleContainer>}
        </StyleSkillItem>
    );
};

export default SkillItem;
