import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [bending, setBending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("can not fetch the data on that resource");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setError(null);
          setBending(false);
        })
        .catch((err) => {
          setError(err.message);
          setBending(false);
        });
    }, 1000);
  }, []);

  return { data, bending, error };
};

export default useFetch;
