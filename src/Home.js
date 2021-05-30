import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    bending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div>
      {error && <div> {error} </div>}
      {bending && <div>loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All blogs"></BlogList>}
    </div>
  );
};

export default Home;
