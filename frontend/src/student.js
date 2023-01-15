const API_URL = "http://localhost:3001/";

export async function getStudentApi() {
  return fetch(API_URL)
    .then((res) => res.json())
    .then((data) => data)
    .catch((e) => console.log(e));
}

export async function postStudentApi(student) {
  return fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(student),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    })
    .catch((e) => {
      console.log(e);
    });
}

export async function patchStudentApi(id) {
  let student = {
    _id: id,
  };
  return fetch(API_URL + `/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(student),
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((e) => console.log(e));
}

export async function deleteStudentAPI(id) {
  return fetch(API_URL + `${id}`, { method: "DELETE" })
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((e) => console.log(e));
}
