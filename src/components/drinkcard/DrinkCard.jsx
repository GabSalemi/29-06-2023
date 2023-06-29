import "./index.css"

const DrinkCard = ({data}) => {
    return <div className="drink__card" id={data.idDrink}>
        <div className="info__container">
            <div className="name__div"> 
                <h2>{data.name}</h2>
                <h4>{data.tagline}</h4>
            </div>
        </div>
        <div className="drink__img">
            <img src={data.image_url} alt={data.strDrink} />
        </div>
    </div>
}

export default DrinkCard;