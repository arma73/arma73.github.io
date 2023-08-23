import type {
    IErrorResponseWithErrors,
    IErrorResponseWithMessage,
    ISuccessResponseWithData,
} from "./api.interface";
import type { typeToFlattenedError } from "zod";

export interface IContactPostRequestBody {
    name: string;
    email: string;
    message: string;
}

export interface IContactSuccessPostResponseData {
    mailed: string;
}

export type IContactPostResponse =
    | IErrorResponseWithErrors<
          typeToFlattenedError<IContactPostRequestBody>["fieldErrors"]
      >
    | IErrorResponseWithMessage
    | ISuccessResponseWithData<IContactSuccessPostResponseData>
    | IErrorResponseWithMessage;
