import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Nav from "./Nav";
import Home from "./Home";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/about",
      element: <About />,
    },
  ]);
  return (
    <div className="flex w-96 justify-around">
      <RouterProvider router={appRouter}>
        <Nav />
        <Contact />
        <Home />
        <About />
      </RouterProvider>
    </div>
  );
};

export default Body;
