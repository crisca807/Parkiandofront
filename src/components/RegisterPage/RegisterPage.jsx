import React from 'react';
import '../css/RegisterPage.css';
import TitleContainer from './TitleContainer';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

const RegisterPage = () => {
  return (
    <div>
      <TitleContainer />
      <RegisterForm />
      <LoginForm />
    </div>
  );
};

export default RegisterPage;