export const updateUser = async (userId, body, token) =>
  fetch(`${process.env.REACT_APP_BACKEND}users/${userId}`, {
    method: "PATCH",
    headers: {
      "Authorization": `Bearer ${ token }`
    },
    body: body,
  });
