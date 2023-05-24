const product = [" mercedes", "audi", "ford", "lamborghini"]
///1
const showProduct =()=>{
    if(product ==""){
      console.log("Khong co san pham hien thi");
    }
    if(product !=""){
      console.log(product);
    }

}
//  showProduct();

////2
// const addProduct =()=>{
//   let add="";
//   do{
//     add = prompt("nhap san pham :"); 
//     product.push(add);
//     console.log(product);
//   }
//   while(add.length <5)
// }

// addProduct();

///3
// const removeProduct = ()=>{
//     const input = prompt(" nhap san pham can xoa:")
//     const remove = product.filter(item=>item!==input);
//     console.log(remove);
// }
// removeProduct();

const updateProduct = () => {
  const productName = prompt("Nhập tên sản phẩm cần cập nhật:");
  const index = product.indexOf(productName);
  if (index !== -1) {
    const newProductName = prompt("Nhập tên mới cho sản phẩm:");
    while (newProductName.length < 5) {
      newProductName = prompt("Tên sản phẩm phải có ít nhất 5 ký tự, vui lòng nhập lại:");
    }
    product[index] = newProductName;
    console.log("Đã cập nhật sản phẩm: " + productName + " thành " + newProductName);
    showProduct();
  } else {
    console.log("Không tìm thấy sản phẩm cần cập nhật");
  }
}
updateProduct()

// const removeAllProduct = ()=>{
//   const all = product.splice(0,4) 
//   console.log(all);
//   showProduct();
// }
// removeAllProduct();

