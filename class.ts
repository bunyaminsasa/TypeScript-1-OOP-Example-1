//! Class

class Shop {
  constructor(_productName: string, _price: number, _piece: number) {
    this.productName = _productName;
    this.price = _price;
    this.piece = _piece;
  }

  productName: string;
  price: number;
  piece: number;

  GetProductInfo(): string {
    return (
      "Procut Name..: " +
      this.productName +
      "Product Quantity..:" +
      this.piece +
      "Product Price...:" +
      this.price
    );
  }
}

let data = new Shop("Orange", 3000, 20);

data.productName = "Apple";
data.price = 1000;
data.piece = 10;

console.log(data.GetProductInfo());
