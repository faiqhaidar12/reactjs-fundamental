import postsData from "../posts.json";
import Article from "../components/Article";
import Search from "../components/Search";
import { useState } from "react";

function Homepage() {
  const [posts, setPosts] = useState(postsData);
  const [totalPosts, setTotalPosts] = useState(0);

  const ubahPencarian = (value) => {
    const filterPosts = postsData.filter((item) => item.title.includes(value));
    setPosts(filterPosts);
    setTotalPosts(filterPosts.length);
  };
  return (
    <>
      <h1>Simpel Blog</h1>
      <Search ubahPencarian={ubahPencarian} totalPosts={totalPosts} />
      {posts.map((props, index) => (
        <Article {...props} key={index} />
      ))}
    </>
  );
}

export default Homepage;
