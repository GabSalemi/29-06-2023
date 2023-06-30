import "./index.css";
import { useState } from "react";

const Filters = ({productData, setProductData}) => {
    const [checkAmerican, setCheckAmerican] = useState(false);
    const [checkPilsen, setCheckPilsen] = useState(false);
    const [checkBelgian, setCheckBelgian] = useState(false);
    const [checkGerman, setCheckGerman] = useState(false);

    let americanProduct = productData.filter((product) => product.ingredients.yeast.includes("American")) 
    let pilsenProduct = productData.filter((product) => product.ingredients.yeast.includes("Pilsen")) 
    let belgianProduct = productData.filter((product) => product.ingredients.yeast.includes("Belgian"))
    let germanProduct = productData.filter((product) => product.ingredients.yeast.includes("German"))

    const onlyAmerican = () => setProductData(americanProduct)
    const onlyPilsen = () => productData(pilsenProduct)
    const onlyBelgian = () => productData(belgianProduct)
    const onlyGerman = () => productData(germanProduct)


    return <div className="filters__div">
        <input type="checkbox" name="American" checked={checkAmerican} onChange={onlyAmerican}/>
        <input type="checkbox" name="Pilsen" checked={checkPilsen} onChange={onlyPilsen}/>
        <input type="checkbox" name="Belgian" checked={checkBelgian} onChange={onlyBelgian}/>
        <input type="checkbox" name="German" checked={checkGerman} onChange={onlyGerman}/>
    </div>
}

export default Filters