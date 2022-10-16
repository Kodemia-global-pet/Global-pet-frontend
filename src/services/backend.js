export const loginService = (email, name, password) =>
  fetch(`${process.env.REACT_APP_BACKEND}users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, name, password }),
  })


// const response = await fetch(`http://localhost:8080/users/${tokenUserID}`, {
//   method: 'GET',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// })
