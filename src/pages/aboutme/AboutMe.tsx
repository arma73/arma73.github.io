import Layout from "_components/layout";
import Header from "_components/layout/header";
import { Container } from "_components/grid";
import * as S from "_components/styled";
import IconLocation from "_theme/icons/location.svg";
import IconMail from "_theme/icons/mail.svg";
import IconTelephone from "_theme/icons/telephone.svg";
import IconCalendar from "_theme/icons/calendar.svg";

const PageAboutMe = () => (
    <Layout className="aboutme">
        <Header />
        <Container>
            <S.Name>Arman Khilko</S.Name>
        </Container>
        <S.Contacts>
            <S.ContactItem>
                {" "}
                <IconLocation width="20px" /> Armenia, Yerevan{" "}
            </S.ContactItem>
            <S.ContactItem>
                {" "}
                <IconMail width="20px" />{" "}
                <a href="mailto:arma739805@gmail.com">arma739805@gmail.com</a>{" "}
            </S.ContactItem>
            <S.ContactItem>
                {" "}
                <IconTelephone width="20px" />{" "}
                <a href="tel:+374-98-220-530">+374-98-220-530</a>{" "}
            </S.ContactItem>
            <S.ContactItem>
                {" "}
                <IconCalendar width="20px" /> 07.09.1998{" "}
            </S.ContactItem>
        </S.Contacts>
        <Container>
            <S.Text>
                Hi there{" "}
                <span role="img" aria-label="wave">
                    👋
                </span>
                . I am very glad that you are here now and can get to know me
                better. My path as a programmer began three years ago. After a
                few months I did an internship as a webmaster and have not
                stopped since then{" "}
                <span role="img" aria-label="winking face">
                    😉
                </span>
                . It&apos;s been three years since I had the opportunity to work
                with great people, learn every day, mostly always, and make
                great friendships. Currently, I continue to seek new skills,
                learn and share my humble knowledge as much as possible.
            </S.Text>
            <S.Text>
                I strive to contribute to the success of the team hard work,
                attention to detail, and excellent organizational skills. A
                clear of the stack of network protocols and technologies that I
                own. Motivated to learn, grow, and succeed in IT. I&apos;m
                interested in the best practices for organizing code, and I have
                a goal and desire to become an architect in my field.
            </S.Text>
        </Container>
    </Layout>
);

export default PageAboutMe;
