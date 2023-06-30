import "./index.css";
import { useState, useEffect } from "react";
import DrinkCard from "../drinkcard";
import ProductInfo from "../productinfo";
import Filters from "../filters";

const ProductSection = () => {
    const [productData, setProductData] = useState([])
    const [searchInputValue, setSearchInputValue] = useState("")
    const [filteredProduct, setFilteredProduct] = useState("")
    const [categoryFilter, setCategoryFilter] = useState([
        {value: "american", isChecked: true},
        {value: "pilsen", isChecked: true}, 
        {value: "belgian", isChecked: true},
        {value: "german", isChecked: true}
    ])


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

    const onHandleCheckAmerican = (e) => {
        e.preventDefault()
        setCategoryFilter({})
        console.log(categoryFilter)

        
    }

    


    return <>
        <input type="text" className="search__input"  value={searchInputValue} onChange={onInputChange}></input>
        <form className="filters__div">
            <input type="checkbox" name="American" checked={categoryFilter[0].isChecked} onChange={onHandleCheckAmerican} />
            <input type="checkbox" name="Pilsen" checked={categoryFilter[1].isChecked}/>
            <input type="checkbox" name="Belgian" checked={categoryFilter[2].isChecked} />
            <input type="checkbox" name="German" checked={categoryFilter[3].isChecked} />
        </form>
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

