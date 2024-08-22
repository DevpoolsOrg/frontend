import { Route, Routes } from "react-router-dom"
import { HomeView } from "../views/HomeView"

export const HomeRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={ <HomeView/> }/>
    </Routes>
  )
}
