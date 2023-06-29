import "./index.css";
import { useState, useEffect } from "react";
import DrinkCard from "../drinkcard";

const ProductSection = () => {
    const [productData, setProductData] = useState([])

    useEffect(() => {
        fetch("https://api.punkapi.com/v2/beers")
        .then((res) => res.json())
        .then((data) => setProductData(data))
    }, {})

    
    return <div className="product__section">
        {productData.map((beer) => {
            return <DrinkCard data={beer} key={beer.id}/>
        })}
    </div>

}

export default ProductSection