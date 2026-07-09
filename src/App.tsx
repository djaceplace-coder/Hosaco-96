import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import ProgramDetail from './pages/ProgramDetail';
import Alumni from './pages/Alumni';
import GetInvolved from './pages/GetInvolved';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import Profile from './pages/Profile';
import AdminLayout from './pages/admin/AdminLayout';
import AdminDashboard from './pages/admin/Dashboard';
import AdminUsers from './pages/admin/Users';
import AdminContent from './pages/admin/Content';
import AdminEvents from './pages/admin/Events';
import AdminPayments from './pages/admin/Payments';
import AdminCommittee from './pages/admin/Committee';
import AdminCareers from './pages/admin/Careers';
import AdminTransparency from './pages/admin/Transparency';
import AdminAuditLog from './pages/admin/AuditLog';
import Donate from './pages/Donate';
import News from './pages/News';
import Transparency from './pages/Transparency';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

// Account
import AccountLayout from './pages/account/AccountLayout';
import AccountDashboard from './pages/account/Dashboard';
import AccountProfile from './pages/account/Profile';
import AccountSubscription from './pages/account/Subscription';
import AccountBilling from './pages/account/Billing';
import AccountDonations from './pages/account/Donations';
import AccountEvents from './pages/account/Events';
import AccountDirectory from './pages/account/Directory';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="programs" element={<Programs />} />
          <Route path="programs/:slug" element={<ProgramDetail />} />
          <Route path="alumni" element={<Alumni />} />
          <Route path="news" element={<News />} />
          <Route path="get-involved" element={<GetInvolved />} />
          <Route path="donate" element={<Donate />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          
          {/* Account Portal */}
          <Route path="account" element={<AccountLayout />}>
            <Route index element={<AccountDashboard />} />
            <Route path="profile" element={<AccountProfile />} />
            <Route path="subscription" element={<AccountSubscription />} />
            <Route path="billing" element={<AccountBilling />} />
            <Route path="donations" element={<AccountDonations />} />
            <Route path="events" element={<AccountEvents />} />
            <Route path="directory" element={<AccountDirectory />} />
          </Route>

          {/* Admin Portal */}
          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="content" element={<AdminContent />} />
            <Route path="events" element={<AdminEvents />} />
            <Route path="payments" element={<AdminPayments />} />
            <Route path="committee" element={<AdminCommittee />} />
            <Route path="careers" element={<AdminCareers />} />
            <Route path="transparency" element={<AdminTransparency />} />
            <Route path="audit-log" element={<AdminAuditLog />} />
          </Route>
          <Route path="transparency" element={<Transparency />} />
          <Route path="careers" element={<Careers />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="*" element={<div className="min-h-[50vh] flex items-center justify-center"><h1 className="font-serif text-3xl">Page Not Found</h1></div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

