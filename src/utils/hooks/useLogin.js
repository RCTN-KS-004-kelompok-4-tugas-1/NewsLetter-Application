import { account } from '../../utils/constants/account';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const initialValue = {
  email: '',
  password: '',
};
const loginToken = 'loggedinToken';
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
    const token = localStorage.getItem('Login');
    token === loginToken && navigate('/home-page');
    //eslint-disable-next-line
  }, []);
  return [err, hide, state, { handleSubmit, handleChange, setHide }];
}

export default useLogin;
