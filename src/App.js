import React from 'react';
import './App.css';
import BookList from './components/BookList';
import LiBrary from './components/LiBrary';
import Order from './components/Order';
import AppStateProvider from './providers/AppStateProvider';

const App = () => {
  return (
    <>
      <AppStateProvider>
        <LiBrary>
          <BookList />
        </LiBrary>
        <Order />
      </AppStateProvider>
    </>
  );
};

export default App;
