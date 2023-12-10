// validate email
export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
//validate email
export const validatePassword = (password) => {
  var errPassMsg = "";

  var loverCaseLetters = /[a-z]/g;
  if (!password.match(loverCaseLetters))
    errPassMsg += "password phải có ít nhất 1 ký tự thường<br/>";

  var upperCaseLetters = /[A-Z]/g;
  if (!password.match(upperCaseLetters))
    errPassMsg += "password phải có ít nhất 1 ký tự hoa<br/>";

  var numbers = /[0-9]/g;
  if (!password.match(numbers))
    errPassMsg += "password phải có ít nhất 1 con số <br/>";

  if (password.length <= 8) errPassMsg += "password phải có ít nhất 8 ký tự";

  return errPassMsg;
};
export const validateProduct = (product) => {
  var errPassMsg = "";
  if (product.product_name === "")
    errPassMsg += "Bạn cần nhập tên sản phẩm <br />";
  if (product.slug === "") errPassMsg += "Bạn cần nhập slug <br />";
  if (product.cat_id === "") errPassMsg += "Bạn cần chọn một Category <br />";
  if (product.brand_id === "") errPassMsg += "Bạn cần chọn một Brand <br />";
  if (product.summary === "") errPassMsg += "Bạn cần nhập phần summary <br />";
  if (product.image === "") errPassMsg += "Bạn cần nhập tên hình <br />";
  if (product.detail === "")
    errPassMsg += "Bạn cần nhập chi tiết sản phẩm <br />";
  if (product.price === "") errPassMsg += "Bạn cần nhập giá sản phẩm <br />";
  if (parseInt(product.sale_price) > parseInt(product.price))
    errPassMsg += "Giá sale phải nhỏ hơn giá sản phẩm <br/>";
  return errPassMsg;
};
