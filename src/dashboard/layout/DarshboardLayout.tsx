import { Outlet, useNavigate,  } from "react-router-dom";
import { SubMenu } from "../components/SubMenu";
import { useEffect } from "react";


export const DarshboardLayout = () => {

    const navigate = useNavigate();

    useEffect(() => {
        navigate('/dashboard/chart')
    }, [])


    return (
        <main className="h-full flex flex-col">
            <SubMenu />
            <h1 className="m-auto text-2xl">Dashboard</h1>
            <Outlet />
        </main>
    )
}
