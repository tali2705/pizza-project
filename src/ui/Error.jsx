import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  const error = useRouteError();

  const status = isRouteErrorResponse(error) ? error.status : 500;
  const statusText = isRouteErrorResponse(error)
    ? error.statusText || "Something went wrong :("
    : "Internal server error";
  const message =
    isRouteErrorResponse(error) && error.data?.message
      ? error.data.message
      : error.message || error.error.message;

  return (
    <div>
      <h1>
        {status} - {statusText}
      </h1>
      <h3>{message}</h3>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default NotFound;
