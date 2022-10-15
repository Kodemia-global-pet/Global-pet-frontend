export const loginService = (email, password) =>
  fetch(`${process.env.REACT_APP_BACKEND}auth`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })

// const response = await fetch(`http://localhost:8080/users/${tokenUserID}`, {
//   method: 'GET',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// })
