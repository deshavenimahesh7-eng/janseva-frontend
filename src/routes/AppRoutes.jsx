import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from '../components/ProtectedRoute.jsx'
import Home from '../pages/Home.jsx'
import Login from '../pages/Login.jsx'
import Register from '../pages/Register.jsx'
import ServiceList from '../pages/ServiceList.jsx'
import ServiceDetails from '../pages/ServiceDetails.jsx'
import Departments from '../pages/Departments.jsx'
import OfficeLocations from '../pages/OfficeLocations.jsx'
import ApplyService from '../pages/ApplyService.jsx'
import TrackStatus from '../pages/TrackStatus.jsx'
import MyApplications from '../pages/MyApplications.jsx'
import AdminDashboard from '../pages/admin/AdminDashboard.jsx'
import ManageServices from '../pages/admin/ManageServices.jsx'
import ManageOffices from '../pages/admin/ManageOffices.jsx'
import UpdateStatus from '../pages/admin/UpdateStatus.jsx'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/services" element={<ServiceList />} />
      <Route path="/services/:id" element={<ServiceDetails />} />
      <Route path="/departments" element={<Departments />} />
      <Route path="/offices" element={<OfficeLocations />} />

      <Route element={<ProtectedRoute role="CITIZEN" />}>
        <Route path="/apply/:id" element={<ApplyService />} />
        <Route path="/my-applications" element={<MyApplications />} />
        <Route path="/track/:id" element={<TrackStatus />} />
      </Route>

      <Route element={<ProtectedRoute role="ADMIN" />}>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/services" element={<ManageServices />} />
        <Route path="/admin/offices" element={<ManageOffices />} />
        <Route path="/admin/status" element={<UpdateStatus />} />
      </Route>
    </Routes>
  )
}
