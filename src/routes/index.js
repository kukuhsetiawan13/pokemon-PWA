import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  import App from "../App";
  import PokemonDetails from "../views/PokemonDetails";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>
    },
    {
        path: "/details/:name",
        element: <PokemonDetails/>
    }
  ]);

  export default router