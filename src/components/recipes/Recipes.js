import React from 'react';
import {Link} from 'react-router-dom';

const Recipes = (props)=>(
  <div>
    {props.recipes && props.recipes.map((recipe)=>{
      return <div className="container mt-2" key={recipe.recipe_id}>
          <div className="row">
            <div className="col-lg-8 col-md-9 col-sm-10 mx-auto">
              <div className="card p-1" >
                <div className="row no-gutters" >
                  <div className="col-lg-4 text-center">
                    <img  src={recipe.image_url} className="img-fluid img-thumbnail" alt="weLove"/>
                  </div>
                  <div className="col-lg-8 text-left mt-2 ">
                    <div className="card-body">
                      <h4 className="card-title ">@{ recipe.title.length < 20 ? `${recipe.title}` : `${recipe.title.substring(0, 25)}...` }</h4>
                      <p className="card-text">{ recipe.publisher.length < 20 ? `${recipe.publisher}` : `${recipe.publisher.substring(0, 25)}...` }</p>
                      <button type="button" className="btn btn-outline-secondary float-right">
                        <Link to={{pathname: `/recipe/${recipe.recipe_id}`,state: { recipe: recipe.title }}}> See more </Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>   
        </div>}
      )
    }
  </div>
);
export default Recipes;