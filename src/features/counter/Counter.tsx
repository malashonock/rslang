import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../hooks';

import { decrement, increment } from './counterSlice';

export default function Counter() {
  // The `state` arg is correctly typed as `RootState` already
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  // omit rendering logic
}
