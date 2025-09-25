// frontend/pages/Login.js
import React from 'react';
import LoginForm from '../components/LoginForm';

const Login = () => {
  const handleLogin = (credentials) => {
    console.log('User logged in with:', credentials);
    // 在这里执行用户登录的 API 请求
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default Login;
