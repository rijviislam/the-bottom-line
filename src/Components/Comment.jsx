export default function Comment({ comment }) {
  const { comment: mycmnt, commenterName, commenterPhoto } = comment;
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
      <h2 className="text-3xl">Comment {mycmnt}</h2>
    </div>
  );
}
