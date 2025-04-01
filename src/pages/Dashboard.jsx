import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase';
import Hero from '../components/Hero';
import NavbarDashboard from '../components/NavbarDashboard';
import Statistics from '../components/Statistics';
import Top from '../components/Top';

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkPaymentStatus = async () => {
      const user = auth.currentUser;

      if (!user) {
        // If no user is authenticated, redirect to sign-in
        navigate('/sign-in');
        return;
      }

      try {
        // Get the user document from Firestore
        const userDoc = await db.collection('users').doc(user.uid).get();

        //mail email and pno

        if (userDoc.exists) {
          const userData = userDoc.data();

          // Check if the user's payment is completed
          if (userData.paymentStatus === 'completed') {
            setLoading(false); // Allow access to dashboard
          } else {
            // Redirect to payment page if the payment is not complete
            alert('Please complete your payment to access the dashboard.');
            navigate('/pricing-and-payment', { state: { selectedPlan: userData.plan, userId: user.uid } });
          }
        } else {
          console.error('No such user document!');
          navigate('/sign-in');
        }
      } catch (error) {
        console.error('Error checking payment status:', error.message);
        navigate('/sign-in');
      }
    };

    checkPaymentStatus();
  }, [navigate]);

  if (loading) {
    // Show a loading indicator while we check payment status
    return <p>Loading...</p>;
  }

  return (
    <>
      <NavbarDashboard />
      <Hero />
      <Statistics />
      <Top />
    </>
  );
};

export default Dashboard;


