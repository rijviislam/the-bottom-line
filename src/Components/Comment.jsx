// export default function Comment({ comment }) {
//   if (!comment) {
//     return null;
//   }
//   const { comment: cmnt, commenterName, commenterPhoto } = comment;
//   return (
//     <div>
//       <div className="flex gap-2">
//         <img
//           src={commenterPhoto}
//           className="w-[50px] h-[50px] rounded-full"
//           alt=""
//         />
//         <p className="font-medium">{commenterName}</p>
//       </div>
//       <h2 className="text-sm">{cmnt}</h2>
//     </div>
//   );
// }

export default function Comment({ comment }) {
  if (!comment) {
    return null;
  }
  const { comment: cmnt, commenterName, commenterPhoto } = comment;
  return (
    <div>
      <div className="flex gap-2">
        <img
          src={commenterPhoto}
          className="w-[50px] h-[50px] rounded-full"
          alt=""
        />
        <p className="font-medium">{commenterName}</p>
      </div>
      <h2 className="text-sm">{cmnt}</h2>
    </div>
  );
}
