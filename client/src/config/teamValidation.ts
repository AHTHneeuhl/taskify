import * as Yup from "yup";

export const createTeamValidation = Yup.object({
  title: Yup.string().required(),
  category: Yup.string().required(),
  members: Yup.array(),
  description: Yup.string(),
});
