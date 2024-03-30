import React from "react";

const CartPage = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className="product-thumbnail">Image</th>
            <th className="product-name">Product</th>
            <th className="product-price">Price</th>
            <th className="product-quantity">Quantity</th>
            <th className="product-subtotal">Total</th>
            <th className="product-remove">Remove</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="product-thumbnail">
              <a href="#">
                <img src="" alt="cart-image" />
              </a>
            </td>
            <td className="product-name">
              <a href="product-details.html">{}</a>
            </td>
            <td className="product-price">
              <span className="amount">{}</span>
            </td>
            <td className="product-quantity">
              <input type="number" value={} />
            </td>
            <td className="product-subtotal">£{}</td>
            <td className="product-remove">
              <button>
                <i className="fa fa-times" aria-hidden="true"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CartPage;
