import { Alert, Snackbar, Stack } from "@mui/material";
import React, { createContext, useContext, useEffect, useState } from "react";

const ToastContext = React.createContext();

export function ToastContextProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    if (toasts.length > 0) {
      const timer = setTimeout(
        () => setToasts((toasts) => toasts.slice(1)),
        3000
      );
      return () => clearTimeout(timer);
    }
  }, [toasts]);

  const addToast = (toast) => {
    setToasts([...toasts, toast]);
  };

  return (
    <ToastContext.Provider value={addToast}>
      {children}
      <>
        {toasts.map((toast, index) => (
          <Snackbar
            open={true}
            key={index}
            autoHideDuration={6000}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <Alert severity="success" sx={{ width: "100%" }}>
              {toast}
            </Alert>
          </Snackbar>
        ))}
      </>
    </ToastContext.Provider>
  );
}

export default ToastContext;

export const useToast = () => useContext(ToastContext);
