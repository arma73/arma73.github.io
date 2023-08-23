/* eslint-disable max-lines */
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useSpinDelay } from "spin-delay";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Input,
    Textarea,
    Label,
    InlineMessage,
    Button,
    Panel,
    showToast,
} from "@lib/ui";
import { flattenObjectValues } from "@lib/utils";
import EmailFallbackCredentials from "./EmailFallbackCredentials";

import type { IContactPostResponse } from "@lib/interfaces";

const dialogSchema = z.object({
    name: z
        .string()
        .min(2, { message: "Name must contain at least 2 characters" }),
    email: z
        .string()
        .min(1, { message: "This field has to be filled." })
        .email("This is not a valid email."),
    message: z
        .string()
        .min(5, { message: "Message has to be minimum 5 characters" }),
});

type Schema = z.infer<typeof dialogSchema>;

const DialogForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid },
    } = useForm<Schema>({
        resolver: zodResolver(dialogSchema),
        mode: "onBlur",
        shouldFocusError: true,
    });
    const [loading, setLoading] = useState(false);
    const showSpinner = useSpinDelay(loading, { delay: 500, minDuration: 200 });
    const onSubmit = handleSubmit(async (data: Schema) => {
        setLoading(true);
        const res = await fetch("/api/contact", {
            body: JSON.stringify(data),
            method: "POST",
            headers: new Headers({ "content-type": "application/json" }),
        });

        const mailed: IContactPostResponse = await res.json();

        if (mailed.success) {
            showToast({
                description:
                    "Thank you for reaching out to me. I have received your message and will get back to you as soon as possible.",
            });
            reset();
        } else {
            if ("errors" in mailed) {
                const msgList = flattenObjectValues(mailed.errors);

                showToast({
                    title: mailed.message,
                    description: msgList,
                    variant: "destructive",
                });
            } else {
                showToast({
                    title: mailed.message,
                    variant: "destructive",
                    action: <EmailFallbackCredentials />,
                });
            }
        }
        setLoading(false);
    });

    return (
        <Panel>
            <form onSubmit={onSubmit}>
                <div className="">
                    <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
                        <div className="col-span-full w-full sm:w-3/4">
                            <Label
                                required
                                htmlFor="name"
                                className="mb-2"
                                text="Your name"
                            />
                            <Input
                                {...register("name")}
                                placeholder="Dave Beverley"
                                type="text"
                                id="name"
                            />
                            <InlineMessage
                                variant="error"
                                message={errors?.name?.message}
                            />
                        </div>
                        <div className="col-span-full w-full sm:w-3/4">
                            <Label
                                required
                                htmlFor="email"
                                className="mb-2"
                                text="Email address"
                            />
                            <Input
                                {...register("email")}
                                placeholder="example@domain.com"
                                type="email"
                                id="email"
                            />
                            <InlineMessage
                                variant="error"
                                message={errors.email?.message}
                            />
                        </div>
                        <div className="col-span-full">
                            <Label
                                required
                                htmlFor="message"
                                className="mb-2"
                                text="Message"
                            />
                            <Textarea
                                {...register("message")}
                                placeholder="Tell me anything and everything."
                                id="message"
                            />
                            <InlineMessage
                                variant="error"
                                message={errors.message?.message}
                            />
                        </div>
                        <div>
                            <Button
                                as="button"
                                vtype="primary"
                                type="submit"
                                loading={showSpinner}
                                disabled={!isValid || loading}
                                className="flex-none">
                                Submit
                            </Button>
                        </div>
                    </div>
                </div>
            </form>
        </Panel>
    );
};

export default DialogForm;
