export const loginService = (email, password) =>
  fetch(`${process.env.REACT_APP_BACKEND}auth`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
