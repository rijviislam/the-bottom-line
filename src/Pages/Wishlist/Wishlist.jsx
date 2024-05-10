// import axios from "axios";
// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../AuthProvider/AuthProvider";

// export default function Wishlist() {
//   const { user } = useContext(AuthContext);
//   const [userWishlist, setUserWishlist] = useState([]);
//   useEffect(() => {
//     getData();
//   }, [user]);

//   const getData = async () => {
//     const { data } = await axios(
//       `${import.meta.env.VITE_API_URL}/wishlist/${user?.email}`
//     );
//     setUserWishlist(data);
//   };
//   console.log(userWishlist);
//   // const {
//   //   data: wishlist = [],
//   //   isError,
//   //   refetch,
//   //   isLoading,
//   //   error,
//   // } = useQuery({
//   //   queryFn: () => getData(),
//   //   queryKey: ["wishlist"],
//   // });

//   // useEffect(() => {
//   //   getData();
//   // }, []);
//   // const getData = async () => {
//   //   const { data } = await axios(`${import.meta.env.VITE_API_URL}/wishlist`);
//   //   return data;
//   // };
//   // if (isLoading) return <Spinner size="xl" />;
//   // if (isError || error) {
//   //   console.log(isError, error);
//   // }
//   return (
//     <div className="px-10">
//       <div>wishlists </div>
//     </div>
//   );
// }

export default function Wishlist() {
  return <div>Wishlist</div>;
}
