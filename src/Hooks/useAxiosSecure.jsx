import axios from "axios";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

export default function useAxiosSecure() {
  // const {logOut} = useAuth()
  //   axiosSecure.interceptors.response.use(
  //     (res) => {
  //       console.log("response ase");
  //       return res;
  //     },
  //     async (error) => {
  //       console.log("error from axios intersectore", error.response);
  //       if (error.response.status === 401 || error.response.status === 403) {
  //         await console.log("asdsadasd logout");
  //       }
  //       return Promise.reject(error);
  //     }
  //   );
  // axios.interceptors.request;
  return axiosSecure;
}
