import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { legacy_createStore as createStore, combineReducers } from 'redux';
import '@testing-library/jest-dom'

import App from './App';
import counterReducer from './redux/reducers/counterReducer';

const renderWithRedux = (
  component,
  {
    initialState,
    store = createStore(combineReducers({ counterReducer }), initialState),
  } = {}
) => ({
  ...render(<Provider store={store}>{component}</Provider>),
  store,
});

test('O número renderizado na página deve ser o mesmo valor do estado global', () => {
  const initialState = {
    counterReducer: {
      count: 5,
    }
  };
  renderWithRedux(<App />, { initialState });

  expect(screen.queryByText('0')).not.toBeInTheDocument();
  expect(screen.getByText('5')).toBeInTheDocument();
});
