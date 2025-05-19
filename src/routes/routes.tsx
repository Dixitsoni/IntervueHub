import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {ProtectedRoute,PublicRoute} from './protectedRoutes';
import AdminDashboard from '../views/AdminDashboard';
import InterviewerDashboard from '../views/InterviewerDashboard';
import RecruiterDashboard from '../views/CandidateDashboard';
import Login from '../views/auth/login/Login';
import Signup from '../views/auth/signup/Signup';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          < ProtectedRoute allowedRoles={['admin']} >
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
      < Route
        path="/interviewer"
        element={
          < ProtectedRoute allowedRoles={['interviewer']} >
            <InterviewerDashboard />
          </ProtectedRoute>
        }
      />
      < Route
        path="/candidate"
        element={
          < ProtectedRoute allowedRoles={['candidate']} >
            <RecruiterDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <PublicRoute>
            <Signup />
          </PublicRoute>
        }
      />
      < Route path="*" element={<h2> Page Not Found </h2>} />
    </Routes>
  )
}

export default AppRoutes;
