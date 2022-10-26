export const loginService = (email, password) =>
  fetch(`${process.env.REACT_APP_BACKEND}auth`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

export const createUser = async (name, email, password) =>
  fetch(`${process.env.REACT_APP_BACKEND}users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });

export const getUserService = async (userID) =>
  fetch(`${process.env.REACT_APP_BACKEND}users/${userID}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

export const createPet = async (userID, token, formData) =>
  fetch(`${process.env.REACT_APP_BACKEND}users/${userID}/pet`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });
