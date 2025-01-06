import * as yup from 'yup';

export interface ApplyLabelData {
    email: string;
    resume: any;
}

export const ApplyLabelSchema = yup.object({
    email: yup.string().required(),
    resume: yup.mixed().required()
}).required()