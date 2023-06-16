import { toast } from "react-toastify";

const useNotification = () => {
  const notifySuccess = (message: string) => toast.success(message);
  const notifyDanger = (message: string) => toast.error(message);
  const notifyInfo = (message: string) => toast.info(message);

  return {
    notifySuccess,
    notifyDanger,
    notifyInfo,
  };
};

export default useNotification;
