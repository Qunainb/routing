import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/Home";
import ProductPage from "./Pages/Product";
import RootLayout from "./Pages/Root";
import ErrorPage from "./Pages/Error";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/products", element: <ProductPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
