const key = "token";

export const getTokenLocalStorage = () => {
  const user = localStorage.getItem(key);
  if (user) return JSON.parse(user);
  return null;
};

export const saveTokenLocalStorage = (sessionData) => {
  localStorage.setItem(key, JSON.stringify(sessionData));
};

export const deleteTokenLocalStorage = () => {
  localStorage.removeItem(key);
};

export const getUserData = async (token) => {
  //get user ID
  const payload = token.split(".")[1];
  const tokenUserID = JSON.parse(atob(payload)).id;

  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}users/${tokenUserID}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const user = await response.json();
  let userData = user.data.user;
  console.log(userData);
  return userData;
};
