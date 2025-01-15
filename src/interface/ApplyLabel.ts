import * as yup from 'yup';

export interface ApplyLabelData {
    labelId: string;
    file?: any;
}

export const ApplyLabelSchema = yup.object({
    labelId: yup.string().required(),

}).required()