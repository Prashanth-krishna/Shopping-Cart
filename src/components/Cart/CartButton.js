import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../Store/show-slice";
import { Button } from "@mui/material";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const onClickHandler = () => {
    dispatch(uiActions.toggle());
  };
  const noofItems = useSelector((state) => state.cart.noOfItems);
  return (
    <Button className={classes.button} onClick={onClickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{noofItems}</span>
    </Button>
  );
};

export default CartButton;
