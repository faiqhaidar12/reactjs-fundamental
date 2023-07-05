import { Link, useLoaderData } from "react-router-dom";

function Blog() {
  const posts = useLoaderData();

  return (
    <div>
      <h3>API JSON PLACEHOLDER</h3>
      {posts.map((item, index) => (
        <div key={index}>
          <Link to={`/blog/${item.id}`}>
            <ul>
              <li>{item.title}</li>
            </ul>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Blog;
