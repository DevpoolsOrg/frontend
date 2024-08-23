import { Outlet } from "react-router-dom";
import { useForumStore } from "../store/forum.store";
import { Loader } from "@/UI/components/loaders/Loader";
import { Recommendations } from "../pages/Recommendations";

export const ForumLayout = () => {
  const isLoading = useForumStore((state) => state.isLoading);

  return (
    <>
      <main className="grid grid-cols-12">

        <section className="sm:col-span-8 grid place-items-center border col-span-12">
          {isLoading && <Loader />}
          <Outlet />
        </section>
        <section className="sm:col-span-4 sm:grid  border hidden">
          <Recommendations />
        </section>
      </main>
    </>
  );
};
