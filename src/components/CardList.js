import Card from "./Card";
import "./../styles/components/_cardList.scss";

import axios from "axios";
import { useState, useEffect } from "react";

const CardList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      axios.get(
        `http://localhost:1337/products`
      )
        .then((data) =>{
        setProducts(data.data);
        setLoading(false);
      })
  }, []);

  return (
    loading ? <div className="loading">Loading... </div>:
    <>
    <div class="nav-cut">
    <nav>
      <a href="#tous"> Tous nos produits</a>
      <a href="#poignard">Poignards</a>
      <a href="#poche">Couteaux de poche</a>
      <a href="#pliant">Couteaux pliants</a>
      <a href="#papillon">Couteaux papillon</a>
     
    </nav> 
    </div>
    <h2>Nos Produits:</h2>
    <div className="card-group" id="tous">
      {products.map((product) => (
        <Card product={product} key={product.id} />
      ))}
    </div>
    <h2>Couteaux de cuisine:</h2>
    <div className="card-group" id="cuisine">
      {products
            .filter(
              (product) =>
                product.products_category &&
                product.products_category.name_c === "cuisine"
            )
            .map((product) => (
              <Card product={product} key={product.id} />
            ))}
    </div>
    <h2>Poignards:</h2>
    <div className="card-group" id="poignard"> 
    {products
            .filter(
              (product) =>
                product.products_category &&
                product.products_category.name_c === "poignard"
            )
            .map((product) => (
              <Card product={product} key={product.id} />
            ))}
    </div> 
    <h2>Couteaux papillon:</h2>
    <div className="card-group" id="papillon">
    {products
            .filter(
              (product) =>
                product.products_category &&
                product.products_category.name_c === "papillon"
            )
            .map((product) => (
              <Card product={product} key={product.id} />
            ))}
    </div>
    <h2>Couteaux de poche:</h2>
    <div className="card-group" id="poche">
    {products
            .filter(
              (product) =>
                product.products_category &&
                product.products_category.name_c === "poche"
            )
            .map((product) => (
              <Card product={product} key={product.id} />
            ))}
    </div>
    <h2>Couteaux pliants:</h2>
    <div className="card-group" id="pliant">
    {products
            .filter(
              (product) =>
                product.products_category &&
                product.products_category.name_c === "pliant"
            )
            .map((product) => (
              <Card product={product} key={product.id} />
            ))}
    </div>
    </>
  );
};

export default CardList;
