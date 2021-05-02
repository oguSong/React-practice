axios
  .get("https://49b69bb9-2356-4bfc-bfac-cc8e239abc0f.mock.pstmn.io/products")
  .then(function (result) {
    console.log("통신결과 : ", result); //result 객체
    const products = result.data.products;
    let productsHtml = "";
    for (var i = 0; i < products.length; i++) {
      productsHtml =
        productsHtml +
        '<div class="product-card">' +
        "<div>" +
        '<img class="product-img" src="' +
        products[i].imageUrl +
        '"/>' +
        "</div>" +
        '<div class="product-contents">' +
        '<span class="product-name">' +
        products[i].name +
        "</span>" +
        '<span class="product-price">' +
        products[i].price +
        " 원" +
        "</span>" +
        '<div class="product-seller">' +
        '<img class="product-avatar" src="../images/icons/avatar.png" />' +
        "<span>" +
        products[i].seller +
        "</span>" +
        "</div>" +
        "</div>" +
        "</div>";

      document.querySelector("#product-list").innerHTML = productsHtml;
    }
  })
  .catch(function (error) {
    console.log("에러 발생 : ", error);
  });
console.log("바로실행");
