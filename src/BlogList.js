const BlogList = ({ blogs, title }) => {
  return (
    <div className="home">
      <h1>{title}</h1>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;