// Register.js

// import React, { useState } from 'react';
// import axios from 'axios';

// const Register = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleRegister = async () => {
//     try {
//       const response = await axios.post('https://capstone-3-jcg9.onrender.com/register', {
//         email,
//         password,
//       });
//       alert("User registered successfully")
//       localStorage.setItem('token', response.data.token);
//       window.location.href = '/';
//     } catch (error) {
//       setError('Registration failed');
//     }
//   };

//   return (
//     <div>
//       <h2>Register</h2>
//       <div>{error && <p>{error}</p>}</div>
//       <input
//         type="text"
//         placeholder="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <br /><br />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <br /><br />
//       <button onClick={handleRegister}>Register</button>
//     </div>
//   );
// };

// export default Register;

// Register.js

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const Register = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string()
      .required('Required')
      .min(8, 'Password must be at least 8 characters long')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
        'Password must contain at least one lowercase, one uppercase, and one number'
      ),
  });

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await axios.post('http://localhost:5000/register', {
        email: values.email,
        password: values.password,
      });
      alert('User registered successfully');
      localStorage.setItem('token', response.data.token);
      window.location.href = '/';
    } catch (error) {
      setErrors({ email: 'Registration failed' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <Field type="text" name="email" placeholder="Email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              <Field type="password" name="password" placeholder="Password" />
              <ErrorMessage name="password" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
