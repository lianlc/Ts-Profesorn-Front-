import axios from "axios";
import { defer } from "react-router-dom";

const API_URL = "/ts-error";

const mainLoader = async ({ request }) => {
  const fullURL = new URL(request.url);
  const message = fullURL.searchParams.get("message");
  const code = fullURL.searchParams.get("code");

  const errorDataPromise = axios.post(
    API_URL,
    { message, code },
    {
      headers: {
        "content-type": "application/json",
      },
      withCredentials: true,
    }
  );

  return defer({
    errorData: errorDataPromise,
  });
};

export default mainLoader;
