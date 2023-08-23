import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { siteConfig } from "#web/configs/site";
import { contactFormSchema } from "./_validation";
import { credentials } from "./_credentials";

import type { NextRequest } from "next/server";
import type {
    IErrorResponseWithErrors,
    IErrorResponseWithMessage,
    ISuccessResponseWithData,
    IContactPostRequestBody,
    IContactSuccessPostResponseData,
} from "@lib/interfaces";
import type { typeToFlattenedError } from "zod";

export async function POST(req: NextRequest) {
    try {
        const body: IContactPostRequestBody = await req.json();
        const form = await contactFormSchema.safeParseAsync(body);

        if (!form.success) {
            const errorResponse: IErrorResponseWithErrors<
                typeToFlattenedError<IContactPostRequestBody>["fieldErrors"]
            > = {
                success: false,
                message: "The data provided does not meet the requirements.",
                errors: form.error.flatten().fieldErrors,
            };

            return new NextResponse(JSON.stringify(errorResponse), {
                headers: { "Content-Type": "application/json" },
                status: 400,
            });
        }

        const transporter = nodemailer.createTransport({
            host: credentials.host,
            port: credentials.port,
            secure: true,
            auth: credentials.auth,
        });

        const { name, email, message } = body;

        const mailData = {
            from: credentials.auth.user,
            to: siteConfig.email,
            subject: `Message From ${name}`,
            text: message + " | Sent from: " + email,
            html: `<div>${message}</div> <hr /><p><b>Sent from:</b> ${email}</p>`,
        };

        const transporedMail = await transporter.sendMail(mailData);

        if (
            (transporedMail.rejected.length > 0 &&
                transporedMail.rejected.includes(siteConfig.email)) ||
            !transporedMail.accepted.includes(siteConfig.email)
        ) {
            const errorResponse: IErrorResponseWithMessage = {
                success: false,
                message: "Something is wrong with sending the email.",
            };
            return new NextResponse(JSON.stringify(errorResponse), {
                status: 502,
                headers: { "Content-Type": "application/json" },
            });
        }

        const successResponse: ISuccessResponseWithData<IContactSuccessPostResponseData> =
            {
                success: true,
                message: "The email was sent successfully",
                data: {
                    mailed: siteConfig.email,
                },
            };

        return new NextResponse(JSON.stringify(successResponse), {
            headers: { "Content-Type": "application/json" },
            status: 201,
        });
    } catch (err) {
        const errorResponse: IErrorResponseWithMessage = {
            success: false,
            message: "Something has gone wrong.",
        };
        return new NextResponse(JSON.stringify(errorResponse), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
