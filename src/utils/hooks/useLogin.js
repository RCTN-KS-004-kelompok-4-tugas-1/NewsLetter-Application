import { account, loginToken } from '../../utils/constants/account';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import isAuth from '../helpers/authentication';

const initialValue = {
  email: '',
  password: '',
};

function useLogin() {
  const [state, setState] = useState(initialValue);
  const [err, setErr] = useState('');
  const [hide, setHide] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const key = e.target.id;
    const val = e.target.value;
    setState((state) => {
      return { ...state, [key]: val };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.email === account.email && state.password === account.password) {
      setErr('');
      localStorage.setItem('Login', loginToken);
      navigate('/home-page');
    } else {
      setErr('Wrong password and email');
    }
  };
  useEffect(() => {
    isAuth() && navigate('/home-page');
    //eslint-disable-next-line
  }, []);
  return [err, hide, state, { handleSubmit, handleChange, setHide, setErr }];
}

export default useLogin;
