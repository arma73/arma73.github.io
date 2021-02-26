interface IProcessEnv {
    "REACT_APP_NAME"?: string;
    "REACT_APP_DESCRIPTION"?: string;
    "REACT_APP_PORT"?: string;
    "REACT_APP_HOST"?: string;
    "PUBLIC_URL"?: string;
    "NODE_ENV"?: "development" | "production";
}

declare module "process" {
    global {
        namespace NodeJS {
            interface ProcessEnv extends IProcessEnv {}
        }
    }
}
