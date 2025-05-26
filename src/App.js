import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/Home";
import ProductPage from "./Pages/Product";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/products", element: <ProductPage /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
