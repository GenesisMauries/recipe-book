import React, {Component} from 'react';
import { Link } from "react-router-dom";


const key = "d8c18edd0b7973738f811b593d8ad815"
// "10b5a5825540c475f10e0f0dda30e92f"
// ;

class Recipe extends Component {
  state = {
    active: []
  }
  componentDidMount = async () =>{
    const title = this.props.location.state.recipe
    const request = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${key}&q=${title}`)
    const response = await request.json()
    // console.log(response.recipes[0])
    this.setState({active: response.recipes[0]})
    console.log(this.state.active)
  }
   
      render() {
        // console.log(this.props)
        return (
          <div className="container">
            <div className="row">
            { this.state.active.length !== 0 && 
              <div className="col-8 mx-auto">
              <div  className="card">
                <img  src={this.state.active.image_url} className="card-img-top" alt={this.state.active.title}/>
                <div className="card-body">
                  <h5 className="card-title">{this.state.active.title}</h5>
                  <p className="card-text">Publisher: <span> {this.state.active.publisher} </span></p>
                  <p className="card-text">Website: <a href={this.state.active.publisher_url}>{this.state.active.publisher_url}</a></p>
              <button className="btn btn-outline-secondary float-right">
              <Link to="/">Home</Link>
            </button>
                </div>
                </div>
              </div> }
            
            </div>
          </div>
        );
      }

}


export default Recipe;
