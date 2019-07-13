import React, {Component} from 'react';
import Searcher from './components/searcher/Searcher';
import './App.css';

const key = "d8c18edd0b7973738f811b593d8ad815";

class App extends Component{
  getData = async (e)=>{
    const search= e.target.elements.search.value
    console.log(search)
    e.preventDefault()
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${key}&q=${search}&count=15`)
    const data = await api_call.json()
    console.log(data)
    
  }
  render(){
    return (
      <div className="App">
      <header className="App-header">
            <h1 className="App-title">Recipe book</h1>
          </header>
       <Searcher getData={this.getData}/>
      </div>
    );
  }
 
}

export default App;
