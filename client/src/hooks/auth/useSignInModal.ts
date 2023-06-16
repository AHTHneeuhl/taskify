import { create } from "zustand";

interface SignInModalState {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useSignInModal = create<SignInModalState>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useSignInModal;
