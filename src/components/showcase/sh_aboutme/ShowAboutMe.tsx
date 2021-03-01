import { useHistory } from "react-router-dom";
import { RoutePage } from "_settings/path.routes";
import Modal from "_components/modal";
import { Container } from "_components/grid";
import { Title, Name, Contacts, ContactItem, Text } from "./styled.sc";
import IconLocation from "_theme/icons/location.svg";
import IconMail from "_theme/icons/mail.svg";
import IconTelephone from "_theme/icons/telephone.svg";
import IconCalendar from "_theme/icons/calendar.svg";

const ShowAboutMe = () => {
    const history = useHistory();
    const handleRoute = () => history.push(RoutePage.MAIN);

    return (
        <Modal
            visible={true}
            onClose={handleRoute}
            title={<Title>About me</Title>}
            bodyProps={{
                "style": {
                    "background": "#fff",
                },
            }}
        >
            <Container>
                <Name>Arman Khilko</Name>
            </Container>
            <Contacts>
                <ContactItem>
                    {" "}
                    <IconLocation width="20px" /> Armenia, Erevan{" "}
                </ContactItem>
                <ContactItem>
                    {" "}
                    <IconMail width="20px" />{" "}
                    <a href="mailto:arma739805@gmail.com">
                        arma739805@gmail.com
                    </a>{" "}
                </ContactItem>
                <ContactItem>
                    {" "}
                    <IconTelephone width="20px" /> +37498220530{" "}
                </ContactItem>
                <ContactItem>
                    {" "}
                    <IconCalendar width="20px" /> 07.09.1998{" "}
                </ContactItem>
            </Contacts>
            <Container>
                <Text>
                    Hi there{" "}
                    <span role="img" aria-label="wave">
                        👋
                    </span>
                    . I am very glad that you are here now and can get to know
                    me better. My path as a programmer began three years ago.
                    After a few months I did an internship as a webmaster and
                    have not stopped since then{" "}
                    <span role="img" aria-label="winking face">
                        😉
                    </span>
                    . It&apos;s been three years since I had the opportunity to
                    work with great people, learn every day, mostly always, and
                    make great friendships. Currently, I continue to seek new
                    skills, learn and share my humble knowledge as much as
                    possible.
                </Text>
                <Text>
                    I strive to contribute to the success of the team hard work,
                    attention to detail, and excellent organizational skills. A
                    clear of the stack of network protocols and technologies
                    that I own. Motivated to learn, grow, and succeed in IT.
                    I&apos;m interested in the best practices for organizing
                    code, and I have a goal and desire to become an architect in
                    my field.
                </Text>
            </Container>
        </Modal>
    );
};

export default ShowAboutMe;
