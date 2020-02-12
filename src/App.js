import React from 'react';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ThemeContextProvider from './contexts/ThemeContext';

function App() {
  //Navbar et BookList sont attachés aux props du ThemeContextProvider
  /*c'est pour ca mahayban walo haka 7ta t ajoutihom west ThemeContextProvider
  in the ThemeController.js*/

  /*b7ala gelti ta mnesti ThemeContextProvider o khassek tmchi lih bach 
  tchouf ach mnesti west meno tahowa*/
  return (
    <div className="App">
    <ThemeContextProvider>
      <Navbar />
      <BookList />
    </ThemeContextProvider>

    </div>
  );
}

export default App;
