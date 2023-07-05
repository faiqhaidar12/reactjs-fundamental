import { useLoaderData, useParams } from "react-router-dom";

function singlePost() {
  const params = useParams();
  const post = useLoaderData();

  return (
    <>
      <h2>{post?.title}</h2>
      <br />
      <p>{post?.body}</p>
    </>
  );
}

export default singlePost;
