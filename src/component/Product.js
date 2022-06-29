import React from 'react';
import Axios from "axios";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Recipe from './Recipe';
import Alert from "./Alert";


function Product() {

    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [alert, setAlert] = useState("");

    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=apple&app_id=fc7630b4&app_key=1dd04c6a7498db7520cd9d947effc5e6`;

    const getData = async ()=>{
        if (query !== "") {
            const result = await Axios.get(url);
            if (!result.data.more) {
              return setAlert("No food with such name");
            }
            console.log(result);
            setRecipes(result.data.hits);
            setQuery("");
            setAlert("");
          } else {
            setAlert("Please fill the form");
          }
        };


        const onSubmit= (e)=>{
            e.preventDefault();
            getData();
        }

        const onChange= (e)=>{
            setQuery(e.target.value);
        }

  return (
    <div className='product'>
        <div className='overlay'></div>
        <form className='search-form' onSubmit={onSubmit}>
                    {alert !== "" && <Alert alert={alert} />}
            <input type="text"
             placeholder="search food"
             autoComplete="on"
             onChange={onChange}
             value= {query}
             />

            <input type="submit" value="search" />
        </form>
        <div className='recipes'>
        {recipes !== [] &&
                   recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe} />)}
        </div>
    </div>
  )
}

export default Product;