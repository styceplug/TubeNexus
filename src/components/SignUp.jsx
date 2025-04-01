import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, googleProvider, db } from '../firebase';
import google from '../assets/images/google.png';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [username, setUsername] = useState('');
  const [showRequirements, setShowRequirements] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const [passwordError, setPasswordError] = useState('');
  const [verifyPasswordError, setVerifyPasswordError] = useState('');
  const [termsError, setTermsError] = useState('');

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    let isValid = true;

    if (!/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/.test(password)) {
      setPasswordError('Follow password requirements.');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (password !== verifyPassword) {
      setVerifyPasswordError('Passwords do not match.');
      isValid = false;
    } else {
      setVerifyPasswordError('');
    }

    if (!termsAccepted) {
      setTermsError('You must agree to the terms and conditions to sign up.');
      isValid = false;
    } else {
      setTermsError('');
    }

    if (!isValid) return;

    try {
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;

      await db.collection('users').doc(user.uid).set({
        username,
        email,
        paymentStatus: 'pending',
      });

      alert('Account created successfully! Please choose a plan to continue.');
      navigate('/pricing-and-payment', { state: { userId: user.uid } });
    } catch (error) {
      console.error('Error creating account:', error.message);
      alert(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await auth.signInWithPopup(googleProvider);
      navigate('/dashboard');
    } catch (error) {
      console.error('Error signing in with Google:', error.message);
      alert(error.message);
    }
  };

  const passwordRequirements = (
    <div className="password-requirements">
      <p>Password should include a letter, number, and at least one symbol.</p>
    </div>
  );

  return (
    <div className='sign-up'>
      <article>
        <span>SIGN IN TO GET BACK TO YOUR CATALOG</span>
        <h1>Join us Today!!</h1>
      </article>
      <p>Already have an account? <Link to='/sign-in'>Sign in</Link></p>

      <form onSubmit={handleSignUp}>
        <input
          type="text"
          placeholder='Enter Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder='Enter Email address'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="form-group">
          <input
            type="password"
            placeholder='Create Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setShowRequirements(true)}
            onBlur={() => setShowRequirements(false)}
            className={passwordError ? 'error' : ''}
          />
          <input
            type="password"
            placeholder='Verify Password'
            value={verifyPassword}
            onChange={(e) => setVerifyPassword(e.target.value)}
            className={verifyPasswordError ? 'error' : ''}
          />
        </div>
        {showRequirements && passwordRequirements}
        <input type="text" placeholder='Artist, Label, Producer or Management?' />
        <div className="group">
          <input type="checkbox" />
          <label>Stay up to date with TubeNexus news?</label>
        </div>
        <div className="group">
          <input
            type="checkbox"
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
          />
          <label>I agree with TubeNexus terms and conditions</label>
          {termsError && <p className="error-message">{termsError}</p>}
        </div>
        <button className="btn-sign" type='submit'>Sign up</button>
        <button className='btn-google' onClick={handleGoogleSignIn}>
          <img src={google} alt="" /> Sign In with Google
        </button>
      </form>
    </div>
  );
}

export default SignUp;






