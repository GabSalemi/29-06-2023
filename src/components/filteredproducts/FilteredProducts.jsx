import "./index.css"
import { useState, useEffect } from "react"

const FilteredProduct = () => {

    const [productData, setProductData] = useState([])
    const [categoryFilter, setCategoryFilter] = useState([
        {id: 1, value: "American", isChecked: true},
        {id: 2, value: "Pilsen", isChecked: true}, 
        {id: 3, value: "Belgian", isChecked: true},
        {id: 4, value: "German", isChecked: true}
    ])

  

    useEffect(() => {
        fetch("https://api.punkapi.com/v2/beers")
        .then((res) => res.json())
        .then((data) => setProductData(data))
    }, [])


    return <div className="product__categories">
        {categoryFilter.map((category) => 
            <div className="product__category">{productData.filter((product) => product.ingredients.yeast.includes(category.value))
            .map((singleProduct) => 
                <div className="product__card">
                    <h4>{singleProduct.name}</h4>
                    <p>{singleProduct.ingredients.yeast}</p>
                    <img src={singleProduct.image_url}></img>
                </div> )}</div>
        )}
    </div>

}
export default FilteredProduct;
/* 
let americanProduct = productData.filter((product) => product.ingredients.yeast.includes("American")) 
let pilsenProduct = productData.filter((product) => product.ingredients.yeast.includes("Pilsen")) 
let belgianProduct = productData.filter((product) => product.ingredients.yeast.includes("Belgian"))
let germanProduct = productData.filter((product) => product.ingredients.yeast.includes("German")) */
