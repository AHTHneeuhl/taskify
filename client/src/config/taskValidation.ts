import * as Yup from "yup";

export const createTaskValidation = Yup.object({
  title: Yup.string(),
  description: Yup.string(),
});
