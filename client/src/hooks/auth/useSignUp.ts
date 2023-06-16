import { useMutation } from "@tanstack/react-query";
import { signUp } from "api/auth";
import { useNotification } from "hooks/common";

const useSignUp = () => {
  const { notifyDanger, notifySuccess } = useNotification();

  const { mutate: handleSignUp, isLoading } = useMutation({
    mutationKey: ["auth", "signUp"],
    mutationFn: signUp,
    onSuccess: () => {
      notifySuccess("Sign up successfully");
    },
    onError: (error: Error) => notifyDanger(error.message),
  });

  return {
    handleSignUp,
    isLoading,
  };
};

export default useSignUp;
