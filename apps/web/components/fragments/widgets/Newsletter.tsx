import { MailIcon } from "#web/components/icons";
import { Input, Panel, Button, Title } from "@lib/ui";
import { UnderConstructionHoverCard } from "#web/components/cards";

const Newsletter = () => {
    return (
        <UnderConstructionHoverCard>
            <div>
                <Panel className="opacity-40 pointer-events-none cursor-not-allowed">
                    <form action="/thank-you">
                        <div className="flex">
                            <MailIcon className="h-6 w-6 flex-none" />
                            <Title level={2} vsize={5} className="ml-3">
                                Stay up to date
                            </Title>
                        </div>
                        <p className="mt-2 text-sm text-typography-text-light">
                            Get notified when I publish something new, and
                            unsubscribe at any time.
                        </p>
                        <div className="mt-6 flex">
                            <Input
                                id="news_email"
                                vsize="sm"
                                placeholder="Email address"
                                aria-label="Email address"
                                tabIndex={-1}
                                required
                            />
                            <Button
                                as="button"
                                tabIndex={-1}
                                vtype="primary"
                                vsize="md"
                                type="submit"
                                className="ml-4 flex-none">
                                Join
                            </Button>
                        </div>
                    </form>
                </Panel>
            </div>
        </UnderConstructionHoverCard>
    );
};

export default Newsletter;
