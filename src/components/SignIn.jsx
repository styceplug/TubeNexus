import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import google from '../assets/images/google.png';
import { auth, googleProvider, db } from '../firebase'; // Import Firestore db

const SignIn = () => {
  const [loginInput, setLoginInput] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Function to check payment status after sign-in
  const checkPaymentStatusAndNavigate = async (userId) => {
    try {
      const userDoc = await db.collection('users').doc(userId).get();
      if (userDoc.exists) {
        const userData = userDoc.data();
        // Check if paymentStatus is completed
        if (userData.paymentStatus === 'completed') {
          navigate('/dashboard'); // Navigate to dashboard if payment is completed
        } else {
          navigate('/pricing-and-payment', { state: { selectedPlan: userData.plan, userId: userId } }); // Redirect to payment page if payment is incomplete
        }
      } else {
        console.error('User document not found');
        navigate('/sign-in');
      }
    } catch (error) {
      console.error('Error checking payment status:', error.message);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      let emailToUse = loginInput;

      // Check if loginInput is a username by querying Firestore
      const userQuerySnapshot = await db.collection('users').where('username', '==', loginInput).get();
      if (!userQuerySnapshot.empty) {
        emailToUse = userQuerySnapshot.docs[0].data().email; // Use the email associated with the username
      }

      // Sign in with email and password
      const userCredential = await auth.signInWithEmailAndPassword(emailToUse, password);
      const userId = userCredential.user.uid;

      // After successful sign-in, check payment status
      await checkPaymentStatusAndNavigate(userId);
    } catch (error) {
      console.error('Error logging in:', error.message);
      alert(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await auth.signInWithPopup(googleProvider);
      const userId = result.user.uid;

      // After successful Google sign-in, check payment status
      await checkPaymentStatusAndNavigate(userId);
    } catch (error) {
      console.error('Error signing in with Google:', error.message);
      alert(error.message);
    }
  };

  return (
    <div className='sign-in'>
      <article>
        <span>SIGN IN TO GET BACK TO YOUR CATALOG</span>
        <h1>Welcome Back</h1>
      </article>

      <p>New here? <Link to='/sign-up'>Sign up</Link></p>

      <form onSubmit={handleSignIn}>
        <input
          type="text"
          placeholder='Enter Username or Email'
          value={loginInput}
          onChange={(e) => setLoginInput(e.target.value)}
        />
        <input
          type="password"
          placeholder='Enter Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit' className='btn-login'>Login Now</button>
        <button type='button' className='btn-google' onClick={handleGoogleSignIn}>
          <img src={google} alt="Google" />Sign In with Google
        </button>
      </form>
    </div>
  );
};

export default SignIn;





