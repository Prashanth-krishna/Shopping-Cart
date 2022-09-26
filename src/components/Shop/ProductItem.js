import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { cartActions } from "../Store/cart-slice";

const ProductItem = (props) => {
  const { title, price, id, description } = props;
  const dispatch = useDispatch();
  const addItemToCart = () => {
    dispatch(
      cartActions.addItemToCart({
        id: id,
        title: title,
        price: price,
      })
    );
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <Button onClick={addItemToCart}>Add to Cart</Button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
