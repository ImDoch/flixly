import { RouterProvider } from "react-router"
import { appRouter } from "./router/appRouter"

export const FlixlyApp = () => {
  return (
     <RouterProvider router={appRouter} />
  )
}
