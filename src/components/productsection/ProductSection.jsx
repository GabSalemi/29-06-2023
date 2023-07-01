import "./index.css";
import { useState, useEffect } from "react";
import DrinkCard from "../drinkcard";
import ProductInfo from "../productinfo";


const ProductSection = () => {
    const [productData, setProductData] = useState([])
    const [searchInputValue, setSearchInputValue] = useState("")
    const [filteredProduct, setFilteredProduct] = useState("")
    const [categoryFilter, setCategoryFilter] = useState([
        {id: 1, value: "american", isChecked: false},
        {id: 2, value: "pilsen", isChecked: false}, 
        {id: 3, value: "belgian", isChecked: false},
        {id: 4, value: "german", isChecked: false}
    ])
    const [filterCheck, setFilterCheck] = useState(categoryFilter)



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

    const onCheck = (id) => {
      
        setFilterCheck((prev) => {
            prev.map((filter) => {
                if (filter.id === id) {
                 filter.isChecked = !filter.isChecked} 
            })
        })   
    }

    const [esempio, setEsempio] = useState([{
        id: 1,
        b: false,
    }, {
        id: 2,
        b: false,
    }])

    const onClick = (id) => {
        setEsempio((prev) => prev.map((obj) => {if (obj.id === id && obj.b === true) {
            obj.b = false} else if (obj.id === id && obj.b !== true) {
                obj.b = true
            }
            return 
        }))
        
        
    }



    


    return <>
        <input type="text" className="search__input"  value={searchInputValue} onChange={onInputChange}></input>
        {categoryFilter.map((category) => (
            <div className="checkbox_filter" key={category.id}>
                <label htmlFor={category.value} >{category.value}</label>
                <input type="checkbox" name={category.value}  checked={category.isChecked} onChange={() => onClick(category.id)}/>
            </div>
        ))}
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

