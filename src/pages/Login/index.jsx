import Button from '../../components/Button';
import React from 'react';
import useLogin from '../../utils/hooks/useLogin';

function Login() {
  const [err, hide, state, { handleSubmit, handleChange, setHide, setErr }] =
    useLogin();
  return (
    <main
      className="w-100  justify-content-center d-flex align-items-center "
      style={{ height: '100vh' }}
    >
      <div
        style={{
          width: '30%',
          backgroundColor: 'white',
          boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
        }}
        className="p-5 rounded position-relative"
      >
        <form action="submit" onSubmit={handleSubmit}>
          <p style={{ fontWeight: 'bold' }}>Welcome! Please Login</p>
          {err && (
            <small
              id="formHelp"
              className="form-text text-danger position-absolute "
              style={{
                right: '10px',
                bottom: '10px',
              }}
            >
              *{err}
            </small>
          )}
          <div className="form-group mt-1">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              required
              onMouseDown={() => setErr('')}
              onChange={handleChange}
              value={state.email}
            />
          </div>
          <div className="form-group mt-1">
            <label for="exampleInputPassword1">Password</label>
            <input
              type={hide ? 'password' : 'text'}
              className="form-control"
              id="password"
              placeholder="Password"
              onMouseDown={() => setErr('')}
              value={state.password}
              required
              onChange={handleChange}
            />
          </div>
          <div class="form-check pb-3 mt-1">
            <input
              type="checkbox"
              className="form-check-input"
              id="unhide"
              value={hide}
              onChange={() => setHide((state) => !state)}
            />
            <label className="form-check-label" for="exampleCheck1">
              Hide password
            </label>
          </div>

          <Button type="submit" onClick={handleSubmit}>
            Login
          </Button>
        </form>
      </div>
    </main>
  );
}

export default Login;
