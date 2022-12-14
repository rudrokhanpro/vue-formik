export type FormikValue = string | number

export type FormikValues = {
  [key: string]: string | number
}

export type FormikSubmitStatus = boolean

export type FormikErrors = {
  [key: string]: string
}

export interface FormikData {
  values: FormikValues
  errors: FormikErrors
  isSubmitting: FormikSubmitStatus
}

export type FormikValueGetter = (name: string) => FormikValue

export type FormikValueSetter = (name: string, value: FormikValue) => undefined

export type FormikSubmitStatusSetter = (isSubmitting: boolean) => undefined