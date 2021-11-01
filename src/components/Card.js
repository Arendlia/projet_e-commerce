import {threedotstitle} from "../utils/function";
import { threedots } from "../utils/function";
import { Link } from "react-router-dom";
import "./../styles/components/_card.scss";
const Card = ({ product }) => {
  const url = "http://localhost:1337";
  return (
    <div className="container">
        <div className="card">
          <Link to={`/details/${product.id}`}>
          <img
            src={url + product.image[0].url}
            alt={`photo de ${product.title}`}
            className="card__img"
            />
            </Link>
          <div className="card__data">
            <h1 className="card__title">{threedotstitle(product.title)}</h1>
            <span class="card__price">{product.price} €</span>
            <p className="card__description">
              {threedots(product.description)}
            </p>
            <button class="card__button snipcart-add-item"
            data-item-id={product.id}
            data-item-name={product.title}
            data-item-price={product.price}
            data-item-description={product.description}
            data-item-image={url + product.image[0].url}
            data-item-custom2-name="Note de cadeau">
              Add to cart
            </button>
          </div>
        </div>
    </div>
  );
};

export default Card;
