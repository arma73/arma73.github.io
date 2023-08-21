/* eslint-disable max-lines */
"use client";

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CircledUIBox, Button, Title } from "@lib/ui";
import { CloseIcon } from "#web/components/icons";
import DialogForm from "./DialogForm";

const AvailableDialog = () => {
    const [isOpen, setIsOpen] = useState(false);

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    return (
        <>
            <CircledUIBox vsize={null} block="center">
                <Button
                    as="button"
                    vsize={"md"}
                    aria-label="Toggle dark mode"
                    className=""
                    onClick={openModal}>
                    <div className="flex justify-center items-center gap-2">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping delay-1000 absolute inline-flex h-full w-full rounded-full bg-primary-foreground opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-foreground"></span>
                        </span>
                        <span className="hidden text-sm font-medium text-typography-text-medium xs:inline-block">
                            Available
                        </span>
                    </div>
                </Button>
            </CircledUIBox>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0">
                        <div className="fixed inset-0 bg-zinc-800/50 dark:bg-black/80" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95">
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl ring-1 ring-consistent bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-zinc-900">
                                    <Button
                                        vtype="secondary"
                                        vsize="md"
                                        as="button"
                                        type="submit"
                                        onClick={closeModal}
                                        className="flex-none absolute right-3 top-3">
                                        <CloseIcon className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
                                    </Button>
                                    <div className="mb-6">
                                        <Dialog.Title
                                            as={Title}
                                            level={3}
                                            className={
                                                "text-typography-title/80"
                                            }>
                                            Say Hi
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            <p className="text-sm text-typography-text-light">
                                                Get in touch to inquire about my
                                                availability or just say
                                                something nice. Or both.
                                                Preferably both.
                                            </p>
                                        </div>
                                    </div>
                                    <DialogForm />
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default AvailableDialog;
