import React, { useState } from 'react';
import Input from '../InputComponent/Input';
import './LoginForm.css'
import Button from '../ButtonComponent/Button';
interface InputEvent extends React.ChangeEvent<HTMLInputElement> {}
const LoginForm = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleEmailChange = (e: InputEvent) => {
    setEmail(e.target.value);
    console.log('email', email);
  };

  const handlePasswordChange = (e: InputEvent) => {
    setPassword(e.target.value);
    console.log('password',password);
  };

  const onButtonClick = () => {
    console.log('EMAIL', email);
    console.log('PASSWORD', password);
  }
  return (
    <form className='loginForm'>
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
      />
      <Button placeholder="SUBMIT" onClick={onButtonClick}/>
    </form>
  );
};

export default LoginForm