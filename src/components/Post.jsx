import { Link } from "react-router-dom";

function Post({ book }) {
  return (
    <div className="post-container">
      <Link to={`/${book._id}`}>
        <img className="post-image" src={book.book_image} alt={book.title} />
      </Link>
    </div>
  );
}

export default Post;
