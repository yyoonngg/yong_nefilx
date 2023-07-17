import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOGRiN2I3ZDBjYTdiZGVjZmVhZTI5YjNkMjU4ZTg5NiIsInN1YiI6IjY0NmIyMWNkNTRhMDk4MDExYjJiZDEyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q13wfrGfGqXizHXou2hfdisCsUfdUxV6LibUfrU_WAQ",
  },
});
// Add a request interceptor
api.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    console.log("request start", config);
    return config;
  },
  function (error) {
    // Do something with request error
    console.log("request error", error);
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log("response", response);
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log("response error:", error);
    return Promise.reject(error);
  }
);

export default api;
