/* eslint-disable max-lines */
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, Textarea, Label, InlineMessage, Button, Panel } from "@lib/ui";
import * as z from "zod";

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
        formState: { errors, isValid },
    } = useForm<Schema>({
        resolver: zodResolver(dialogSchema),
        mode: "onBlur",
        shouldFocusError: true,
    });
    // eslint-disable-next-line no-console
    const onSubmit = handleSubmit((data: Schema) => console.log(data));

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
                                disabled={!isValid}
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
