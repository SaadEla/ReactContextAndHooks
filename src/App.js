import React from 'react';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import AuthContextProvider from './contexts/AuthContext';
import BookContextProvider from './contexts/BookContext';


function App() {
  //Navbar et BookList sont attachés aux props du ThemeContextProvider
  /*c'est pour ca mahayban walo haka 7ta t ajoutihom west ThemeContextProvider
  in the ThemeContext.js*/

  /*b7ala gelti ta mnesti ThemeContextProvider o khassek tmchi lih bach 
  tchouf ach mnesti west meno tahowa*/
  return (
    <div className="App">
    <ThemeContextProvider>
      <AuthContextProvider>
        <Navbar />
        <BookContextProvider>
          <BookList />
        </BookContextProvider>
        <ThemeToggle />
      </AuthContextProvider>
    </ThemeContextProvider>

    </div>
  );
}

export default App;
