import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

const products = [
  // Indoor Plants
  {
    id: 1,
    name: "Snake Plant",
    category: "Indoor Plants",
    price: 499,
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee"
  },
  {
    id: 2,
    name: "Peace Lily",
    category: "Indoor Plants",
    price: 599,
    image:
      "https://images.unsplash.com/photo-1593482892290-f54927ae2a6d"
  },
  {
    id: 3,
    name: "Money Plant",
    category: "Indoor Plants",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b"
  },
  {
    id: 4,
    name: "Areca Palm",
    category: "Indoor Plants",
    price: 699,
    image:
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e"
  },
  {
    id: 5,
    name: "ZZ Plant",
    category: "Indoor Plants",
    price: 549,
    image:
      "https://images.unsplash.com/photo-1632207691144-1e0c9d7f9a2c"
  },
  {
    id: 6,
    name: "Rubber Plant",
    category: "Indoor Plants",
    price: 649,
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09"
  },

  // Succulents
  {
    id: 7,
    name: "Aloe Vera",
    category: "Succulents",
    price: 249,
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09"
  },
  {
    id: 8,
    name: "Echeveria",
    category: "Succulents",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc"
  },
  {
    id: 9,
    name: "Haworthia",
    category: "Succulents",
    price: 349,
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09"
  },
  {
    id: 10,
    name: "Jade Plant",
    category: "Succulents",
    price: 399,
    image:
      "https://images.unsplash.com/photo-1520412099551-62b6bafebf68"
  },
  {
    id: 11,
    name: "String of Pearls",
    category: "Succulents",
    price: 449,
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09"
  },
  {
    id: 12,
    name: "Zebra Haworthia",
    category: "Succulents",
    price: 379,
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc"
  },

  // Flowering Plants
  {
    id: 13,
    name: "Rose Plant",
    category: "Flowering Plants",
    price: 499,
    image:
      "https://images.unsplash.com/photo-1496062031456-07b8f162a322"
  },
  {
    id: 14,
    name: "Orchid",
    category: "Flowering Plants",
    price: 799,
    image:
      "https://images.unsplash.com/photo-1560717789-0ac7c58ac90a"
  },
  {
    id: 15,
    name: "Jasmine",
    category: "Flowering Plants",
    price: 399,
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e"
  },
  {
    id: 16,
    name: "Hibiscus",
    category: "Flowering Plants",
    price: 449,
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e"
  },
  {
    id: 17,
    name: "Marigold",
    category: "Flowering Plants",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946"
  },
  {
    id: 18,
    name: "Lavender",
    category: "Flowering Plants",
    price: 549,
    image:
      "https://images.unsplash.com/photo-1499002238440-d264edd596ec"
  }
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const categories = [
    "Indoor Plants",
    "Succulents",
    "Flowering Plants"
  ];

  const isAddedToCart = (productId) => {
    return cartItems.some(
      (item) => item.id === productId
    );
  };

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div className="product-page">

      <h1>Paradise Nursery Plants</h1>

      {categories.map((category) => {

        const categoryProducts = products.filter(
          (product) =>
            product.category === category
        );

        return (
          <section
            className="category-section"
            key={category}
          >

            <h2>{category}</h2>

            <div className="product-grid">

              {categoryProducts.map((product) => (

                <div
                  className="product-card"
                  key={product.id}
                >

                  <img
                    src={product.image}
                    alt={product.name}
                  />

                  <h3>{product.name}</h3>

                  <p>
                    Beautiful {product.name} for
                    your home and indoor space.
                  </p>

                  <p className="price">
                    ₹{product.price}
                  </p>

                  <button
                    className="add-btn"
                    onClick={() =>
                      handleAddToCart(product)
                    }
                    disabled={isAddedToCart(
                      product.id
                    )}
                  >
                    {isAddedToCart(product.id)
                      ? "Added to Cart"
                      : "Add to Cart"}
                  </button>

                </div>

              ))}

            </div>

          </section>
        );
      })}

    </div>
  );
}

export default ProductList;