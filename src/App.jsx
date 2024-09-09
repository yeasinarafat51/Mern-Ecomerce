import { RouterProvider } from "react-router-dom"
import router from "./rout/Router"



function App() {
  

  return (
    <>
      <div className="bg-[#c4c4c44d]">
        <RouterProvider router={router}></RouterProvider>

      </div>

    </>
  )
}

export default App
