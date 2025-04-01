import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PaystackButton } from 'react-paystack';
import { auth, db } from '../firebase'; // Import Firebase Firestore and Auth
import Pricing from '../components/Pricing';

const PricingAndPayment = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const userId = auth.currentUser?.uid; // Assuming the user is authenticated

  const publicKey = 'pk_test_58aa471223675e756ce46c7a08df896b436219c7'; // Replace with your actual public key

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setEmail(user.email); // Set the user's email in the state
    }
  }, []);

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
  };

  const handleSuccess = async (reference) => {
    console.log('Payment successful! Reference:', reference);

    try {
      // Update the paymentStatus in Firestore to 'completed'
      await db.collection('users').doc(userId).update({
        paymentStatus: 'completed',
      });

      alert('Payment completed successfully!');
      navigate('/dashboard'); // Redirect to dashboard after successful payment
    } catch (error) {
      console.error('Error updating payment status:', error);
      alert('Failed to update payment status. Please contact support.');
    }
  };

  const handleClose = () => {
    alert('Payment window closed. Please try again if you haven\'t completed your payment.');
  };

  // Convert plan price to kobo (Naira * 100)
  const amountInKobo = selectedPlan
    ? parseFloat(selectedPlan.price.replace('₦', '').replace(',', '')) * 100
    : 0;

  return (
    <div>
      {/* Assuming Pricing component allows plan selection */}
      <Pricing onSelectPlan={handleSelectPlan} />

      {selectedPlan && email && (
        <div className='selected'>
          <h2>Selected Plan: {selectedPlan.type}</h2>
          <p>Price: {selectedPlan.price}</p>
          <PaystackButton
            email={email}
            amount={amountInKobo}
            publicKey={publicKey}
            text="Pay Now"
            onSuccess={handleSuccess}
            onClose={handleClose}
            currency="NGN"
          />
        </div>
      )}

      {!email && (
        <p>Please ensure you are logged in with a valid email address before making a payment.</p>
      )}
    </div>
  );
};

export default PricingAndPayment









