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

export const updatePet = async (petID, token, formData) =>
  fetch(`${process.env.REACT_APP_BACKEND}pets/${petID}`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

export const deletePet = async (petID, token) =>
  fetch(`${process.env.REACT_APP_BACKEND}pets/${petID}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const createEvent = async (petID, token, formData) =>
  fetch(`${process.env.REACT_APP_BACKEND}pets/${petID}/records`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });
