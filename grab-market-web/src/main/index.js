import React from "react";
import axios from "axios";
import "./index.css";

function Mainpage() {
  const [products, setProducts] = React.useState([]);
  React.useEffect(function () {
    axios
      .get(
        "https://49b69bb9-2356-4bfc-bfac-cc8e239abc0f.mock.pstmn.io/products"
      )
      .then(function (result) {
        const products = result.data.products;
        setProducts(products);
      })
      .catch(function (error) {
        console.log("에러발생:", error);
      });
  }, []);

  return (
    <div>
      <div id="header">
        <div id="head-area">
          <img src="../images/icons/logo.png" />
        </div>
      </div>

      <div id="body">
        <div id="banner">
          <img src="../images/banners/banner1.png" />
        </div>
        <h1>판매되는 상품들</h1>
        <div id="product-list">
          {products.map(function (products, index) {
            return (
              <div className="product-card">
                <div>
                  <img className="product-img" src={products.imageUrl} />
                </div>
                <div className="product-contents">
                  <span className="product-name">{products.name}</span>
                  <span className="product-price">{products.price}원</span>
                  <div className="product-seller">
                    <img
                      className="product-avatar"
                      src="images/icons/avatar.png"
                    />
                    <span>{products.seller}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default Mainpage;
