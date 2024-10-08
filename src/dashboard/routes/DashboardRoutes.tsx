
import { Route, Routes } from 'react-router-dom';
import { DarshboardLayout } from '../layout/DarshboardLayout';
import { DashboarCharView } from '../views/DashboarCharView';
import { UsersRutes } from '@/users-management/routes/UsersRutes';

export const DashboardRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<DarshboardLayout />} >
                <Route path="chart" element={<DashboarCharView/>} />
                <Route path="table" element={<h1>Table</h1>} />
                <Route path="form" element={<h1>Form</h1>} />
                <Route path="users/*" element={ <UsersRutes /> } />
            </Route>
        </Routes>
    )
}
