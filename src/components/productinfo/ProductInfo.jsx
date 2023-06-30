import "./index.css"

const ProductInfo = ({data}) => {

    console.log(data)
    return <div className="fixed__card">
             {data === undefined ?  
            <h2>We can't find any products matching your search</h2>
           : <div className="product__info">
                <h2>{data.name}</h2>
                <h4>{data.name}</h4>
                <p>{data.description}</p>
                <img src={data.image_url} alt={data.name} />
            </div>
            }
           
           
        </div>

}

export default ProductInfo;