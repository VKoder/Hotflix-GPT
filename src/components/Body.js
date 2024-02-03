import Browse from "./Browse";
import Login from "./Login";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import MovieInfo from "./MovieInfo";
import MovieDemo from "./MovieDemo";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/movieinfo/:id",
      element: <MovieInfo />,
    },
    {
      path: "/moviedemo",
      element: <MovieDemo />,
    },
  ]);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};
export default Body;
