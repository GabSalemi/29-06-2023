import "./index.css";
import { useState, useEffect } from "react";
import DrinkCard from "../drinkcard";
import ProductInfo from "../productinfo";

const ProductSection = () => {
    const [productData, setProductData] = useState([])
    const [searchInputValue, setSearchInputValue] = useState("")
    const [filteredProduct, setFilteredProduct] = useState("")

    useEffect(() => {
        fetch("https://api.punkapi.com/v2/beers")
        .then((res) => res.json())
        .then((data) => setProductData(data))
    }, [])

    let randomNumber = Math.floor(Math.random() * 24)

    const onInputChange = (e) => {
        e.preventDefault()
        setSearchInputValue(e.target.value)
        let selectedProducts = productData.filter(product => product.name.toLowerCase().includes(searchInputValue))
        setFilteredProduct(selectedProducts[0])
    }

   
    return <>
        <input type="text" className="search__input"  onChange={onInputChange}></input>
        <div>
            {filteredProduct.length === 0 ? 
            <ProductInfo data={""}/> : 
            <ProductInfo data={filteredProduct}/>}
        </div>
    <div className="product__section">
        <div className="product-list__section">
            {productData.map((beer) => {
                return <DrinkCard data={beer} key={beer.id}/>
            })}
        </div>
       
        
    </div> 
    </>

}

export default ProductSection