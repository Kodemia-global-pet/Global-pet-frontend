export const updateUser = async (userId, body, token) =>
  fetch(`${process.env.REACT_APP_BACKEND}users/${userId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${ token }`
    },
    body: JSON.stringify(body),
  });
