import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import Dashboard from './pages/Dashboard';
import UploadTrackPage from './pages/UploadTrackPage';
import PricingAndPayment from './pages/PricingAndPayment';
import { auth, db } from './firebase';

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userDoc = await db.collection('users').doc(user.uid).get();
        const paymentStatus = userDoc.data()?.paymentStatus;
        setIsAuthenticated(paymentStatus === 'completed');
      } else {
        setIsAuthenticated(false);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? children : <Navigate to="/sign-in" />;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='sign-in' element={<SignInPage />} />
      <Route path='sign-up' element={<SignUpPage />} />
      <Route path='pricing-and-payment' element={<PricingAndPayment />} />
      <Route path='dashboard' element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      } />
      <Route path='upload' element={
        <ProtectedRoute>
          <UploadTrackPage />
        </ProtectedRoute>
      } />
    </Route>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
