import postsData from "../posts.json";
import Article from "../components/Article";
import Search from "../components/Search";
import { useEffect, useState } from "react";

function Homepage() {
  const [posts, setPosts] = useState(postsData);
  const [totalPosts, setTotalPosts] = useState(0);
  const [exPosts, setExPosts] = useState([]);

  const ubahPencarian = (value) => {
    const filterPosts = postsData.filter((item) => item.title.includes(value));
    setPosts(filterPosts);
    setTotalPosts(filterPosts.length);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setExPosts(json));
  }, []);

  return (
    <>
      <h1>Simpel Blog</h1>
      <Search ubahPencarian={ubahPencarian} totalPosts={totalPosts} />
      {posts.map((props, index) => (
        <Article {...props} key={index} />
      ))}
      <hr />
      <h3>API JSON PLACEHOLDER</h3>
      {exPosts.map((item, index) => (
        <div key={index}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      ))}
    </>
  );
}

export default Homepage;
