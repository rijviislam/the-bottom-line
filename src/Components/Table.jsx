import { Link } from "react-router-dom";

export default function Table({ blog, idx }) {
  const { _id, category, shortdescription, title } = blog;
  return (
    <div>
      <tr>
        <th>{idx}</th>
        <td>{category}</td>
        <td>{title}</td>
        <td>{shortdescription}</td>
        <td>
          <Link
            to={`/updateblogpage/${_id}`}
            className="btn text-xs bg-teal-800"
          >
            Update Blogs
          </Link>
        </td>
        <td>
          <Link className="btn text-xs bg-teal-800">Delete Blog</Link>
        </td>
      </tr>
    </div>
  );
}
