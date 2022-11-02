import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fakeLogin, reset } from '../../store/reducer/loginSlice';
import isAuth from '../helpers/authentication';

const initialValue = {
  email: '',
  password: '',
};

function useLogin() {
  const [state, setState] = useState(initialValue);
  const [hide, setHide] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { errorMessage, isSuccess, isLoading } = useSelector(
    (state) => state.login,
  );
  const handleChange = (e) => {
    const key = e.target.id;
    const val = e.target.value;
    setState((state) => {
      return { ...state, [key]: val };
    });
  };
  const handleReset = () => {
    dispatch(reset());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = state.email;
    const password = state.password;
    dispatch(fakeLogin({ email, password }));
  };
  useEffect(() => {
    isSuccess && setState(initialValue);
  }, [isSuccess]);

  useEffect(() => {
    isAuth() && navigate('/home-page');
    //eslint-disable-next-line
  }, [isSuccess]);
  return [
    errorMessage,
    hide,
    state,
    isLoading,
    { handleSubmit, handleChange, setHide, handleReset },
  ];
}

export default useLogin;
