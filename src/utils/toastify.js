import { toast } from "react-toastify";

export const toastify = ({ message, type }) => {
  toast[type](message, {
    position: "bottom-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};
