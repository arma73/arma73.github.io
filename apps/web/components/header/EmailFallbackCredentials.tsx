import { forwardRef } from "react";
import { ToastAction } from "@lib/ui";
import { siteConfig } from "#web/configs/site";
import { MailIcon } from "../icons";

const EmailFallbackCredentials = forwardRef<HTMLButtonElement>(
    function EmailCredentialsRef() {
        return (
            <ToastAction
                className="px-3 py-2"
                asChild
                altText={`Mailto me at address ${siteConfig.email}`}>
                <a
                    target="_blank"
                    className="flex items-center"
                    href={`mailto:${siteConfig.email}`}
                    rel="noreferrer">
                    <MailIcon className="h-10 w-10" />
                    <span className="leading-5 ml-3 text-typography-text-medium">
                        You can contact me directly by emailing me at{" "}
                        <span className="group-hover:underline text-typography-link">
                            {siteConfig.email}
                        </span>
                    </span>
                </a>
            </ToastAction>
        );
    }
);

export default EmailFallbackCredentials;
