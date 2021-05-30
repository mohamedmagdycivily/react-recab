import { useParams } from "react-router";

const BlogDetails = () => {
  const { id } = useParams();
  return <h1>id = {id}</h1>;
};

export default BlogDetails;
