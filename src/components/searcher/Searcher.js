import React from 'react';

const Searcher = (props)=>(
    <form onSubmit={props.getData} >
        <div className="col-lg-6 col-md-10 col-sm-10 mx-auto input-group mb-3">
            <div className="input-group-append">
                <button className="btn btn-success">Search</button>
            </div>
            <input type="text" name="search" className="form-control" placeholder="Beef, pizza, bacon,etc..."  aria-describedby="button-addon2"/>
        </div>
    </form>
);

export default Searcher;