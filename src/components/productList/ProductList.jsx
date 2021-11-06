import "./productList.css"
import Product from "../product/Product"
import { products } from "../../data"

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Create & Inspire. It's Demba</h1>
                <p className="pl-description">
                    Demba is a creative Portfolio that your work has been waiting for.
                    Here you create Beautiful homes, stunning portfolio & whole lot more 
                    things inside.
                </p>
            </div>
            <div className="pl-list">
                {products.map((item)=>(
                    <Product key = {item.id} img = {item.img} link={item.link}/>
                ))}
        </div>
        </div>
    )
}


export default ProductList
