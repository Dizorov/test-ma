import React from 'react';
import CarsList from './components/CarsList';
import s from './App.module.scss';
function App() {

  return (
    <section className={s.App}>
      <CarsList />
    </section>
  );

}

export default App;
