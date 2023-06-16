import { useMutation } from "@tanstack/react-query";
import { signIn } from "api/auth";
import { useNotification } from "hooks/common";

const useSignIn = () => {
  const { notifySuccess, notifyDanger } = useNotification();

  const { mutate: handleSignIn, isLoading } = useMutation({
    mutationKey: ["auth", "signIn"],
    mutationFn: signIn,
    onSuccess: () => {
      notifySuccess("Sign in successfully");
    },
    onError: (error: Error) => notifyDanger(error.message),
  });

  return {
    handleSignIn,
    isLoading,
  };
};

export default useSignIn;
