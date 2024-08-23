import { Toaster } from "react-hot-toast";
import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import { AppRouter } from "./router/AppRouter";
import { AppLayout } from "./UI/layout/AppLayout";
import { useAuthStore } from "./auth/store/authStore";
import { useEffect } from "react";
import { useForumStore } from "./forum/store/forum.store";

function App() {

  const checkAuth = useAuthStore((state) => state.checkAuth);
  const getCategories = useForumStore((state) => state.getCategories);
  

  useEffect(() => {
    checkAuth();
    getCategories();
  }, [checkAuth]);

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Toaster
        position="bottom-right"
        toastOptions={{
          className: "dark:bg-black dark:text-white ",
          duration: 3000,
        }}
      />
      <AppLayout>
        <AppRouter />
      </AppLayout>
    </ThemeProvider>
  );
}

export default App;
