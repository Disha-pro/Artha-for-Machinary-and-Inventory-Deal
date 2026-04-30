/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import YantraChat from "./components/chatbot/YantraChat";
import { Toaster } from "react-hot-toast";

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const Deals = lazy(() => import("./pages/Deals"));
const HowItWorks = lazy(() => import("./pages/HowItWorks"));
const DealDetail = lazy(() => import("./pages/DealDetail"));
const Calculator = lazy(() => import("./pages/Calculator"));
const Login = lazy(() => import("./pages/Login"));
const KYC = lazy(() => import("./pages/KYC"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const MyDeals = lazy(() => import("./pages/MyDeals"));
const Admin = lazy(() => import("./pages/Admin"));
const NotFound = lazy(() => import("./pages/NotFound"));

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-amber-400 selection:text-slate-950">
        <Navbar />
        <main className="pt-20">
          <Suspense fallback={<div className="flex items-center justify-center min-h-[60vh]"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-400"></div></div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/deals" element={<Deals />} />
              <Route path="/deals/:id" element={<DealDetail />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="/login" element={<Login />} />
              <Route path="/kyc" element={<KYC />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/my-deals" element={<MyDeals />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <YantraChat />
        <Toaster position="bottom-left" />
      </div>
    </Router>
  );
}
