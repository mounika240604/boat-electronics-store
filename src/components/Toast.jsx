import { Toaster } from "react-hot-toast";

function Toast() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 2000,
      }}
    />
  );
}

export default Toast;