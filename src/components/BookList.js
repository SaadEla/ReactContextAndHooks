import React, { useContext} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';
import { fadeOutRight } from 'react-animations';
import Radium, { StyleRoot }from 'radium';

const styles = {
  fadeOutRight:{
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeOutRight, 'bounce')
  }
}
//NAAADI HAD CONTEXT M3A USECONTEXT HOOK
const BookList = () => {
  const {isLightTheme, light, dark} = useContext(ThemeContext);
  const { books } = useContext(BookContext)
  const theme = isLightTheme ? light : dark;
  const book = books.map( (xx) =>{
    return(
      <li style={{ background: theme.ui }} key={xx.id}>{xx.title}</li>
    )
  });
  let bool = true;
  const declencher = ()=>{
    bool = !bool;
    console.log(bool)
  }
  return (   
    <StyleRoot>
      <div>  
        <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
          <ul>
            {book}
          </ul>
        </div>
        { bool ? 
                <div>
                  <h1>React Animation</h1>
                </div>
                :
                <div style={styles.fadeOutRight}>
                  <h1>React Animation</h1>
                </div>
        }
        <button onClick={declencher} >Declencher</button>
      </div>
    </StyleRoot>
  );
}

export default BookList;

