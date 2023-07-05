import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  return <div>Ada error bang!</div>;
}

export default ErrorPage;
