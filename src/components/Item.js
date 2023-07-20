import React , {useState} from "react";

function Item({ name, category }) {

  function handleClick() {
    setIsInCart((isIncart)=> !isInCart)
}

  const [isInCart, setIsInCart] = useState(false);


  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className='add' onClick={handleClick}> {isInCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;





