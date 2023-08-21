import { forwardRef } from "react";

import type { InputHTMLAttributes, FC, TextareaHTMLAttributes } from "react";
import type { FieldError } from "react-hook-form";

interface IInputTextProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    placeholder: string;
    id: string;
    className?: string;
    errors?: FieldError;
}

const ErrorMessage: FC<{ message?: string }> = ({ message }) => {
    if (!message) return null;

    return (
        <div>
            <p className="text-xs text-inline-error">{message}</p>
        </div>
    );
};

export const InputText = forwardRef<HTMLInputElement, IInputTextProps>(
    function InputTextRef(
        { label, className, id, required, placeholder, errors, ...rest },
        externalRef
    ) {
        return (
            <div className={className}>
                <label
                    htmlFor={id}
                    className="block text-sm font-medium mb-2 leading-6 text-gray-900">
                    {label}
                    {required ? <span className="ml-0.5">&#42;</span> : null}
                </label>
                <input
                    ref={externalRef}
                    type={id}
                    name={id}
                    id={id}
                    className="block w-full sm:w-3/4 rounded-md border-0 pl-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-consistent placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder={placeholder}
                    {...rest}
                />
                <ErrorMessage message={errors?.message} />
            </div>
        );
    }
);

interface IInputTextarea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    errors?: FieldError;
}

export const InputTextarea = forwardRef<HTMLTextAreaElement, IInputTextarea>(
    function InputTextRef(
        { label, className, errors, required, id, placeholder, ...rest },
        externalRef
    ) {
        return (
            <div className={className}>
                <label
                    htmlFor={id}
                    className="block text-sm font-medium leading-6 text-gray-900">
                    {label}
                    {required ? <span className="ml-0.5">&#42;</span> : null}
                </label>
                <div className="mt-2">
                    <textarea
                        ref={externalRef}
                        name={id}
                        id={id}
                        className="block w-full rounded-md border-0 pl-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-consistent placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder={placeholder}
                        {...rest}
                    />
                </div>
                <ErrorMessage message={errors?.message} />
            </div>
        );
    }
);
