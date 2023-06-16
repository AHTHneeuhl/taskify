import { taskifyPublicAPI } from "api/instances";

export interface TSignUpPayload {
  fullName: string;
  email: string;
  password: string;
}

const signUp = async (payload: TSignUpPayload) => {
  const { data } = await taskifyPublicAPI.post("/auth/signUp", payload);

  return data;
};

export default signUp;
