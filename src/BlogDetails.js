import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const {
    data: blog,
    bending,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);
  const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    }).then(() => history.push("/"));
  };
  return (
    <div className="blog-details">
      {error && <h2>{error}</h2>}
      {bending && <p>Loading...</p>}
      {blog && (
        <article>
          <h1>{blog.title}</h1>
          <p>written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
