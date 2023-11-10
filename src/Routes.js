import { Route, Routes } from 'react-router-dom';
import AdminLayout from './admin/pages/AdminLayout';
import AdminDashboard from './AdminDashboard';
import AdminRegister from './AdminRegister';
import AdminProduct from './AdminProduct';
import AdminCategeory from './AdminCategeory';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="adminregister" element={<AdminRegister />} />
        <Route path="adminProduct" element={<AdminProduct />} />
        <Route path="admincategeory" element={<AdminCategeory />} />
      </Route>
    </Routes>
  );
}
