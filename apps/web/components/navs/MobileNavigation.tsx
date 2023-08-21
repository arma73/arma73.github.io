import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Title } from "@lib/ui";
import { ChevronDownIcon, CloseIcon } from "#web/components/icons";
import MobileNavItem from "./MobileNavItem";
import { siteNavs } from "#web/configs/nav";

import type { PopoverProps } from "@headlessui/react";

const MobileNavigation = (props: PopoverProps<"nav">) => {
    return (
        <Popover {...props}>
            <Popover.Button className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-consistent backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:hover:ring-consistent-accent">
                Menu
                <ChevronDownIcon className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400" />
            </Popover.Button>
            <Transition.Root>
                <Transition.Child
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="duration-150 ease-in"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0">
                    <Popover.Overlay className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80" />
                </Transition.Child>
                <Transition.Child
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-150 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95">
                    <Popover.Panel
                        focus
                        className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-consistent dark:bg-zinc-900">
                        <div className="flex flex-row-reverse items-center justify-between">
                            <Popover.Button
                                aria-label="Close menu"
                                className="-m-1 p-1">
                                <CloseIcon className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
                            </Popover.Button>
                            <Title level={3} vsize={5}>
                                Navigation
                            </Title>
                        </div>
                        <nav className="mt-6">
                            <ul className="-my-2 divide-y divide-consistent/50 text-base text-zinc-800 dark:text-zinc-300">
                                {siteNavs.map(nav => (
                                    <MobileNavItem
                                        key={nav.path}
                                        disable={nav.disable}
                                        href={nav.path}>
                                        {nav.name}
                                    </MobileNavItem>
                                ))}
                            </ul>
                        </nav>
                    </Popover.Panel>
                </Transition.Child>
            </Transition.Root>
        </Popover>
    );
};

export default MobileNavigation;
