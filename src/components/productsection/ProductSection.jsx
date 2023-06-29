import "./index.css";
import { useState, useEffect } from "react";
import DrinkCard from "../drinkcard";

const ProductSection = () => {
    const [productData, setProductData] = useState([])

    useEffect(() => {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
        .then((res) => res.json())
        .then((data) => setProductData(data.drinks))
    }, {})

    console.log(productData)
    
    return <div>
        {productData.map((drink) => {
            return <DrinkCard data={drink}/>
        })}
    </div>

}

export default ProductSection