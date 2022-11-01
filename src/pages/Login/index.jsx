import Button from '../../components/Button';
import React from 'react';
import useLogin from '../../utils/hooks/useLogin';

function Login() {
  const [err, hide, state, { handleSubmit, handleChange, setHide }] =
    useLogin();
  return (
    <div style={{ width: '20%' }}>
      <form action="submit" onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={handleChange}
            value={state.email}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="Password"
            value={state.password}
            onChange={handleChange}
          />
        </div>
        <div class="form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="exampleCheck1"
            value={hide}
            onChange={() => setHide((state) => !state)}
          />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        {err && (
          <small id="formHelp" class="form-text text-muted">
            {err}
          </small>
        )}
        <Button type="submit" onClick={handleSubmit}>
          Login
        </Button>
      </form>
    </div>
  );
}

export default Login;
