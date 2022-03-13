import { useState } from 'react';
import './App.css';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

function App() {

  const [categories, setCategories] = useState(['goku'])

 /*  const addItems = () =>{
    
    setCategories(['pepe' ,...categories])
    setCategories(category => [...category, 'pepe'])
  } */
  return (
    <div className="App">
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories}/>
      <hr/>
  <ol>
    {
      categories.map(category =>{
        return <GifGrid 
        key={category}
        category={category}/>
      })
    }
  </ol>
 
    </div>
  );
}

export default App;
