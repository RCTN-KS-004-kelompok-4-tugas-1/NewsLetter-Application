import { account, loginToken } from '../../utils/constants/account';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import isAuth from '../helpers/authentication';
import { useDispatch, useSelector } from 'react-redux';
import { fakeLogin } from '../../store/reducer/loginSlice';
const initialValue = {
  email: '',
  password: '',
};

function useLogin() {
  const [state, setState] = useState(initialValue);
  const [err, setErr] = useState('');
  const [hide, setHide] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { errorMessage, isSuccess } = useSelector((state) => state.login);
  const handleChange = (e) => {
    const key = e.target.id;
    const val = e.target.value;
    setState((state) => {
      return { ...state, [key]: val };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let email = state.email;
    let password = state.password;
    dispatch(fakeLogin({ email, password }));
  };
  useEffect(() => {
    if (isSuccess) {
      setState(initialValue);
      // isAuth() && navigate('/');
    }
  }, [isSuccess]);

  useEffect(() => {
    if (errorMessage) {
      setErr(errorMessage);
    }
  }, [errorMessage]);

  useEffect(() => {
    isAuth() && navigate('/home-page');
    //eslint-disable-next-line
  }, [isSuccess]);
  return [err, hide, state, { handleSubmit, handleChange, setHide, setErr }];
}

export default useLogin;
