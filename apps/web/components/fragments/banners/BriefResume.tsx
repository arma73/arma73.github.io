/* eslint-disable max-lines */
import Image from "next/image";
import { BriefcaseIcon } from "#web/components/icons";
import { Panel, Title } from "@lib/ui";

interface IResumeItem {
    company: string;
    title: string;
    logo: string;
    start: string | { label?: string; dateTime?: string };
    end: string | { label?: string; dateTime?: string };
}

const resume: Array<IResumeItem> = [
    {
        company: "DigiTitans",
        title: "Full-Stack Developer",
        logo: "/icons/digititans-logo.svg",
        start: "02/2022",
        end: {
            label: "Present",
            dateTime: new Date().getFullYear().toString(),
        },
    },
    {
        company: "Alar Studios",
        title: "Front-End Developer",
        logo: "/icons/alar-logo.svg",
        start: "04/2021",
        end: "12/2021",
    },
    {
        company: "Wazzup24",
        title: "Back-End Developer",
        logo: "/icons/wz24-logo.svg",
        start: "07/2020",
        end: "04/2021",
    },
    {
        company: "ItHire",
        title: "Front-End Developer",
        logo: "/icons/ithire-logo.svg",
        start: "01/2019",
        end: "07/2020",
    },
];

const BriefResume = () => {
    return (
        <Panel>
            <div className="flex">
                <BriefcaseIcon className="h-6 w-6 flex-none" />
                <Title level={2} vsize={5} className="ml-3">
                    Work
                </Title>
            </div>
            <ol className="mt-6 space-y-4">
                {resume.map((role, roleIndex) => (
                    <li key={roleIndex} className="flex gap-4">
                        <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-consistent dark:border dark:border-consistent/50 dark:bg-zinc-800 dark:ring-0">
                            <Image
                                fill={true}
                                src={role.logo}
                                alt=""
                                className="h-7 w-7"
                                unoptimized
                            />
                        </div>
                        <dl className="flex flex-auto flex-wrap gap-x-2">
                            <dt className="sr-only">Company</dt>
                            <dd className="w-full flex-none text-sm font-medium text-typography-text">
                                {role.company}
                            </dd>
                            <dt className="sr-only">Role</dt>
                            <dd className="text-xs text-typography-text-light">
                                {role.title}
                            </dd>
                            <dt className="sr-only">Date</dt>
                            <dd
                                className="ml-auto text-xs text-typography-text-light/70"
                                aria-label={`${
                                    typeof role.start === "string"
                                        ? role.start
                                        : role.start.label
                                } until ${
                                    typeof role.end === "string"
                                        ? role.end
                                        : role.end.label
                                }`}>
                                <time
                                    dateTime={
                                        typeof role.start === "string"
                                            ? role.start
                                            : role.start.dateTime
                                    }>
                                    {typeof role.start === "string"
                                        ? role.start
                                        : role.start.label}
                                </time>{" "}
                                <span aria-hidden="true">—</span>{" "}
                                <time
                                    dateTime={
                                        typeof role.end === "string"
                                            ? role.end
                                            : role.end.dateTime
                                    }>
                                    {typeof role.end === "string"
                                        ? role.end
                                        : role.end.label}
                                </time>
                            </dd>
                        </dl>
                    </li>
                ))}
            </ol>
        </Panel>
    );
};

export default BriefResume;
