import router from "./routers/index"
import { RouterProvider } from "react-router-dom";
function App() {
  return (
     <>
      <RouterProvider router={router} />
      </>
  );
}

export default App;
