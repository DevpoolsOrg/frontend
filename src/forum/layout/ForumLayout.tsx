import { Outlet } from "react-router-dom"

export const ForumLayout = () => {
  return (
    <>
        <main className="grid grid-cols-12">
            <section className="col-span-8 grid place-items-center border">
                <Outlet/>
            </section>
            <section className="col-span-4 grid place-items-center border">recomendaciones</section>
        </main>
    </>
  )
}
