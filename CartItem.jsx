import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";

function CartItem() {
const dispatch = useDispatch();

const cartItems = useSelector((state) => state.cart.items);

const totalAmount = cartItems.reduce(
(total, item) => total + item.price * item.quantity,
0
);

const increaseQuantity = (item) => {
dispatch(
updateQuantity({
id: item.id,
quantity: item.quantity + 1
})
);
};

const decreaseQuantity = (item) => {
if (item.quantity > 1) {
dispatch(
updateQuantity({
id: item.id,
quantity: item.quantity - 1
})
);
}
};

const deleteItem = (id) => {
dispatch(removeItem(id));
};

const handleCheckout = () => {
alert("Coming Soon!");
};

if (cartItems.length === 0) {
return ( <div className="cart-page"> <h1>Shopping Cart</h1>

    <p>Your shopping cart is empty.</p>

    <a href="/plants">
      <button className="continue-btn">
        Continue Shopping
      </button>
    </a>
  </div>
);

}

return ( <div className="cart-page"> <h1>Shopping Cart</h1>

  {cartItems.map((item) => {
    const itemTotal = item.price * item.quantity;

    return (
      <div className="cart-item" key={item.id}>
        <img
          src={item.image}
          alt={item.name}
        />

        <div className="cart-details">
          <h2>{item.name}</h2>

          <p>
            Unit Price: ₹{item.price}
          </p>

          <div className="quantity-controls">
            <button
              onClick={() => decreaseQuantity(item)}
            >
              -
            </button>

            <span>
              Quantity: {item.quantity}
            </span>

            <button
              onClick={() => increaseQuantity(item)}
            >
              +
            </button>
          </div>

          <p>
            Total: ₹{itemTotal}
          </p>

          <button
            className="delete-btn"
            onClick={() => deleteItem(item.id)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  })}

  <div className="cart-summary">
    <h2>
      Total Cart Amount: ₹{totalAmount}
    </h2>

    <button
      className="checkout-btn"
      onClick={handleCheckout}
    >
      Checkout
    </button>

    <a href="/plants">
      <button className="continue-btn">
        Continue Shopping
      </button>
    </a>
  </div>
</div>

);
}

export default CartItem;
