import logo from './logo.svg';
import './App.css';
import Description from './Description.js';
const content=require('./content.json')


function App() {
  return (
    <>
    {
      content.map(function(props)
      {
        return <Description tags={`${props.tags}`} description={`${props.description}`} />
      }
      )
    } 
    </>
  );
}

export default App;
