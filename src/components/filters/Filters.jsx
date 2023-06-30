import "./index.css";
import { useState } from "react";

const Filters = ({productData, setProductData}) => {
    const [checkAmerican, setCheckAmerican] = useState(false);
    const [checkPilsen, setCheckPilsen] = useState(false);
    const [checkBelgian, setCheckBelgian] = useState(false);
    const [checkGerman, setCheckGerman] = useState(false);


    const onCheckAmerican = () => setCheckAmerican((prev) => !prev)

    const onCheckPilsen = () => setCheckPilsen((prev) => !prev);

    const onCheckBelgian = () => setCheckBelgian((prev) => !prev);

    const onCheckGerman = () => setCheckGerman((prev) => !prev);



    return <div className="filters__div">
        <input type="checkbox" name="American" checked={checkAmerican} onChange={onCheckAmerican}/>
        <input type="checkbox" name="Pilsen" checked={checkPilsen} onChange={onCheckPilsen}/>
        <input type="checkbox" name="Belgian" checked={checkBelgian} onChange={onCheckBelgian}/>
        <input type="checkbox" name="German" checked={checkGerman} onChange={onCheckGerman}/>
    </div>
}

export default Filters