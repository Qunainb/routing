import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/Home";
import ProductPage from "./Pages/Product";
import RootLayout from "./Pages/Root";
import ErrorPage from "./Pages/Error";
import ProductDetailPage from "./Pages/ProductDetail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/products", element: <ProductPage /> },
        { path: "/products/:productId", element: <ProductDetailPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
