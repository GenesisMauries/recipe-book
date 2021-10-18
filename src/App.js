import React, {Component} from 'react';
import './App.css';
import Searcher from './components/searcher/Searcher';
import Recipes from './components/recipes/Recipes'


const key ="10b5a5825540c475f10e0f0dda30e92f"
//  "d8c18edd0b7973738f811b593d8ad815"

class App extends Component{
  state = {
    recipes:[]
  }
 
  getData = async (e)=>{
    const search= e.target.elements.search.value
    // console.log(search)
    e.preventDefault()
    const api_call = await fetch(`http://food2fork.com/api/search?key=${key}&q=${search}&count=15`)
    const data = await api_call.json()
    // console.log(data)
    this.setState({ recipes: data.recipes})
    console.log(this.state.recipes)
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe book</h1>
        </header>
       <Searcher getData={this.getData}/>
       <Recipes recipes={this.state.recipes}/>
      </div>
    );
  }
}

export default App;
