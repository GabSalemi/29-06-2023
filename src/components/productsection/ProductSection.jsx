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

    const onInputChange = (e) => {
        e.preventDefault()
        setSearchInputValue(e.target.value)
        let selectedProducts = productData.filter(product => product.name.toLowerCase().includes(searchInputValue.toLowerCase()))
        setFilteredProduct(selectedProducts[0])
    }

    return <>
        <input type="text" className="search__input"  value={searchInputValue} onChange={onInputChange}></input>
        
        <div className="product__page">
            <div className="selected__product"> 
                <ProductInfo data={filteredProduct}/>
            </div>
            <div className="product__section">
                    {productData.map((beer) => {
                        return <DrinkCard data={beer} key={beer.id}/>
                    })}
            </div> 
        </div>
    </>

}

export default ProductSection

