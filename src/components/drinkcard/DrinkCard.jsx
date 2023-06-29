import "./index.css"

const DrinkCard = ({data}) => {
    return <div className="drink__card" id={data.idDrink}>
        <div className="info__container">
            <div className="name__div"> 
                <h2>{data.strDrink}</h2>
                <h4>{data.strAlcoholic}</h4>
            </div>
            <div className="ingredients__div">
                <ul className="ingredients__list">
                    <li>{data.strIngredient1}</li>
                    <li>{data.strIngredient2}</li>
                    <li>{data.strIngredient3}</li>
                </ul>
            </div>
        </div>
        <div className="drink__img">
            <img src={data.strDrinkThumb} alt={data.strDrink} />
        </div>
    </div>
}

export default DrinkCard;