import { Route, Routes } from "react-router-dom"
import { HomeView } from "../views/HomeView"
import { NotFoundPage } from "@/UI/pages/NotFoundPage"

export const HomeRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={ <HomeView/> }/>
        <Route path="*" element={ <NotFoundPage/> }/>
    </Routes>
  )
}
