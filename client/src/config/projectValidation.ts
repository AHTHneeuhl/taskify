import * as Yup from "yup";

export const createProjectValidation = Yup.object({
  title: Yup.string(),
  description: Yup.string(),
});
