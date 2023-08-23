interface ISMTPCredentials {
    host: string;
    port: number;
    auth: {
        user: string;
        pass: string;
    };
}

export const credentials: ISMTPCredentials = {
    host: process.env.SMTP_HOST!,
    port: +process.env.SMTP_PORT!,
    auth: {
        user: process.env.SMTP_TRANSPORTER_MAIL!,
        pass: process.env.SMTP_TRANSPORTER_PASS!,
    },
};
