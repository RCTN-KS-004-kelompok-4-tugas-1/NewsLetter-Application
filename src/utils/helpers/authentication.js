import { loginToken } from '../constants/account';
export default function isAuth() {
  const token = localStorage.getItem('Login');
  return token === loginToken;
}
