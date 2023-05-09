import React from "react";
import { CartItemType } from "../../App";
import { Wrapper } from "./cart-item.styled";
import Button from "@mui/material/Button";

type props = {
  item: CartItemType;
  addToCard: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: React.FC<props> = ({ addToCard, item, removeFromCart }) => {
  return (
    <Wrapper>
      <img src={item.image} alt={item.title} />
      <div>
        <h3>{item.title}</h3>
        <div className="info">
          <p>Price: ${item.price}</p>
          <p>Total: ${item.amount * item.price}</p>
        </div>
        <div className="btns">
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => removeFromCart(item.id)}
          >
            -
          </Button>
          <p>{item.amount}</p>
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => addToCard(item)}
          >
            +
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default CartItem;
