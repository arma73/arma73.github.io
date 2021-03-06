import { useRef } from "react";
import { Parallax } from "react-spring/renderprops-addons";
import ParallaxScrolling, {
    ParallaxScrollingProps,
} from "_components/scrolling/ParallaxScrolling";
import WindowIOS from "_components/ui/WindowIOS";
import Terminal from "_components/ui/Terminal";
import { UnifiedLink } from "_components/links";
import * as S from "_components/styled";
import Img from "_components/img";
import { Container } from "_components/grid";
import Layout from "_components/layout";
import JoinToHireIcon from "_theme/icons/experience/jointohire.png";
import Wazzup24Icon from "_theme/icons/experience/wazzup24.svg";

import "./Experience.scss";

const WorkOnJoinToHire = () => (
    <WindowIOS>
        <Container className="center">
            <UnifiedLink to="https://jointohire.com/" target="_blank">
                <Img
                    src={JoinToHireIcon}
                    alt="JoinToHire"
                    style={{
                        "width": "120px",
                        "height": "20px",
                        "marginTop": "10px",
                    }}
                />
            </UnifiedLink>
        </Container>
        <Container style={{ "padding": "0 10px" }}>
            <S.Text size="15px">
                As the first workplace in the IT sector, I was pleasantly
                surprised by good mutual understanding with colleagues and warm
                relations between them. My job was to create interfaces for the
                company&apos;s product and various freelance jobs, using React
                and Mobx/Redux as our state management system. The focus is on
                creating reusable components that the team can use in future
                projects.
                <br /> - Using my knowledge of front-end design to determine the
                structure and components of a project, making sure they can be
                reused.
                <br /> - Keep your code quality high. <br />- Interact with the
                designer to suggest changes and to make sure the view he has
                about the design is translated into actual functionality
            </S.Text>
        </Container>
    </WindowIOS>
);

const WorkOnWazzup24 = () => (
    <Terminal href="https://wazzup24.com" Icon={Wazzup24Icon} title="Wazzup 24">
        <br />
        <br /> - Microservice architecture, single repository on GitLab. <br />{" "}
        - We work on the principles of CI / CD. Everything is run by Kubernetes.{" "}
        <br /> - Node.js: api on express, we interact with the base on
        PostgreSQL via Sequelize. <br /> - We write logs in MongoDB, our bot
        sends critical errors to telegrams. <br /> - For queues - RabbitMQ, for
        storing content - Rook + Minio, for caching Redis.
    </Terminal>
);

const Experience = () => {
    const ref = useRef<Parallax>(null);

    const handleScrollTo: ParallaxScrollingProps["handleScrollTo"] = count => {
        if (ref.current) {
            // ref.current.scrollTo(count);
        }
    };

    return (
        <Layout className="experience-page" data-spy="scroll">
            <ParallaxScrolling
                viewFirst={<WorkOnJoinToHire />}
                viewSecond={<WorkOnWazzup24 />}
                ref={ref}
                handleScrollTo={handleScrollTo}
            />
        </Layout>
    );
};
export default Experience;
