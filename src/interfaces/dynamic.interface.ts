import { ComponentType, LazyExoticComponent } from "react";

export type DynamicImportType<T = any> = Promise<{
    "default": T;
}>;

export type LazyComponentType = LazyExoticComponent<ComponentType<any>>;
