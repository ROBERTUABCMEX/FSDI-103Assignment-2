

var ProductName=prompt("enter productName:");
var Quantity=prompt("enter Quantity:");
var Price=prompt("enter price:");
var TaxMx=.16;
var PricePreTax=(Price*Quantity);
var TotalPrice = PricePreTax + (PricePreTax * TaxMx);

console.log("ProductName:" + ProductName +"\n Quantity:" + Quantity + "\n Price: $" + (Price * Quantity) + "\n TaxMx:$" + ( (Price * Quantity)* TaxMx) + "\n Total Price : $" + (PricePreTax + (PricePreTax * TaxMx)));
