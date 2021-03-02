import { useEffect } from "react";
import { move } from "_components/navigation/move";

import "./Error404.scss";

const Error404 = () => {
    useEffect(() => {
        move(0, "#eb4a4a");
    }, []);

    return (
        <main className="error404">
            <span> Page not found 404 </span>
        </main>
    );
};

export default Error404;
