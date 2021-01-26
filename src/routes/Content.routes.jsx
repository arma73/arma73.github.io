import { Switch, Route } from "react-router-dom";
import withContent from "_containers/hoc/withContent";
import Container from "_components/container";
import Article from "_components/article";
// FIXME: change directory name
import PageNotFound from "_pages/error/404";

const ContentRoute = ({
    pages,
    "import": importContent
}) => {
    const mapPages = () => pages.map(page => {
        let path = page.path.replace("src/content/", "");
        let content = importContent(path);

        return (
            <Route
                key={page.url}
                exact
                path={page.url}
            >
                <Article
                    {...page}
                    content={content}
                />
            </Route>
        );
    });

    return (
        <Container>
            <Switch>
                {mapPages()}
                <Route path="**">
                    <PageNotFound />
                </Route>
            </Switch>
        </Container>
    );
};

export default withContent(ContentRoute);
