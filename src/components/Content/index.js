import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Container } from "./styles";

import { login, logout } from "../../store/modules/auth/actions";
import { increment, decrement } from "../../store/modules/count/actions";

export default function Main() {
  const count = useSelector(state => state.count.counter);
  const signed = useSelector(state => state.auth.signed);
  const dispatch = useDispatch();

  return (
    <Container>
      <h1>Total count: {count}</h1>

      <div>
        <button onClick={() => dispatch(decrement(2))}>-2</button>
        <button onClick={() => dispatch(increment(2))}>+2</button>
      </div>

      {signed ? (
        <button onClick={() => dispatch(logout())}>LOGOUT</button>
      ) : (
        <button onClick={() => dispatch(login())}>LOGIN</button>
      )}
    </Container>
  );
}
