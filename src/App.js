import { RouterProvider } from "react-router-dom";
import "./App.css";
import routes from "./routes/root";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster />
    </>
  );
}

export default App;
