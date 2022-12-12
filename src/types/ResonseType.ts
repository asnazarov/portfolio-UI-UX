export type ResponseType<Data = {}> = {
    data: Data
    message: string
    fieldsErrors?: Array<{ field: string, error: string }>
    status: number | string
}

export type FieldErrorType = { field: string; error: string }


export type ThunkError = {
    error: {
        message: string
    }
    rejectValue: {
        errors: string,
        fieldsErrors?: FieldErrorType[]
    }
}
