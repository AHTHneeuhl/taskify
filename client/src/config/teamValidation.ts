import * as Yup from "yup";

export const createTeamValidation = Yup.object({
  title: Yup.string(),
  description: Yup.string(),
});
