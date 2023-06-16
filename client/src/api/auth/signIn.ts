import { taskifyPublicAPI } from "api/instances";

export interface TSignInPayload {
  email: string;
  password: string;
}

const signIn = async (payload: TSignInPayload) => {
  const { data } = await taskifyPublicAPI.post("/auth/signIn", payload);

  return data;
};

export default signIn;
