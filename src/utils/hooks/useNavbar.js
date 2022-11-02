import { logout } from '../../store/reducer/loginSlice';
import { useDispatch } from 'react-redux';
import { setSearch } from '../../store/reducer/searchSlice';
import React, { useState } from 'react';

export function useNavbar() {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearch(input));
    setInput('');
  };
  const handleLogout = () => {
    dispatch(logout());
  };

  return [handleChange, handleSubmit, handleLogout, input];
}
