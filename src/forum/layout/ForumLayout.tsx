import { Outlet } from "react-router-dom"

export const ForumLayout = () => {
  return (
    <>
        <main className="grid grid-cols-12">
            <section className="sm:col-span-8 grid place-items-center border col-span-12">
                <Outlet/>
            </section>
            <section className="sm:col-span-4 sm:grid place-items-center border hidden">recomendaciones</section>
        </main>
    </>
  )
}
