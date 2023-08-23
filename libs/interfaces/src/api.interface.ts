export interface ICoreResponse {
    success: boolean;
}

export interface IErrorResponseWithMessage extends ICoreResponse {
    message: string;
}

export interface IErrorResponseWithErrors<T = any>
    extends IErrorResponseWithMessage {
    errors: T;
}

export interface ISuccessResponseWithMessage extends ICoreResponse {
    message: string;
}

export interface ISuccessResponseWithData<T = any>
    extends ISuccessResponseWithMessage {
    data: T;
}
