import React, { useContext} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';

//NAAADI HAD CONTEXT M3A USECONTEXT HOOK
const BookList = () => {
  const {isLightTheme, light, dark} = useContext(ThemeContext);
  const { books } = useContext(BookContext)
  const theme = isLightTheme ? light : dark;
  const book = books.map( (xx) =>{
    return(
      <li style={{ background: theme.ui }} key={xx.id}>{xx.title}</li>
    )
  })
  return (     
    <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
      <ul>
        {book}
      </ul>
    </div>
  );
}

export default BookList;

