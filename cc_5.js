// Task 1: Customer Profile 

let customer = { name: "John Doe", age: 35, email: "john.doe@email.com"
    }; 
    // Declaring an object with properties

    console.log(`Customer Information:
        name: ${customer.name}, 
        Age: ${customer.age}, 
        Email: ${customer.email}`);
// Logging Task 1

// Task 2: Object Methods

let order = { orderID: 105, totalAmount: 500,  status: "Processing",
    // Declaring an object "Order", with all the order information

    displayOrder: function() {
    return `Order ID: ${this.orderID}, Total Amount: ${this.totalAmount}, Status: ${this.status}`;
        }
};
// adding a displayOrder method

console.log("Order Information:", order);
console.log("display order:", order.displayOrder());
// logging task 2

// Task 3: Array Manipulation
let cartItems = ["lettuce", "tomato", "onion"];
//  creating an array with items in my cart
cartItems.push("ground beef");
// adding new product to cart
cartItems.pop();
//removing the last item
cartItems.unshift("mustard");
// add an item to beginning of array
cartItems.shift();
// removing the first item
console.log("Cart Items:", cartItems);
// logging the final items, which should be the same as our initial array

//Task 4: Map Method
let prices = [250, 300, 350];
// array of product prices
let discountedPrices = prices.map(price => price * 0.9);
// applying a 10% discount to the each price the array

console.log("Original Prices:", prices);
console.log("Discounted Prices:", discountedPrices);
// Logging Task 4

//Task 5: Filter Method
let inventory = [4, 0, 5, 0, 8];
// declare an array of product quantities
let = realInventory = inventory.filter(inventory => inventory > 0);
// using the filter method to remove products with zero stock
console.log("Inventory:", realInventory);
// logging task 5 to show output of all products greater than zero

// Task 6: Reduce Method
let sales = [100, 300, 400, 560];
// declaring an array with sales numbers
let totalRevenue = sales.reduce((total, sale) => total + sale, 0);
// calculating the total value of sales in the array using reduce
console.log("Sales:", sales);
console.log("Total Revenue:", totalRevenue);
// logging sales array and total revenue

// Task 7: find() Method
const customers = ["Ally", "Bobbert","Dave", "Michelle"]
// declaring an array of customers
const found = customers.find( cust => cust === "Dave");
// using the find() method to locate the customer named Dave

console.log("Customers:", customers);
console.log("Located:", found);
// Logging the array of customers and logging the find function

// Task 8: Function Declaration

function calculateTax(amount, taxRate)
{ return amount * taxRate};
// made a function calculateTax to find tax amount
let amount = 236 //Price
let taxRate = 0.05 // 5% tax rate
let taxAmount = calculateTax(amount, taxRate);

console.log("Price: $", amount, "Tax Rate:", taxRate);
console.log(`Tax Amount: $${taxAmount}`);
// Logging the initial amount and tax rate, then the calculated tax amount

// Task 9: Function Expression
function applyDiscount(price, discount)
{return price - (price * discount) };
// creating a function that calculated the discounted price
let price = 45 // price of $45
let discount = 0.2 // discount is 20% off
let discountedPrice = applyDiscount(price,discount);
// apply function 

console.log("Price: $", price, "Discount:", discount);
console.log("Discounted Price: $", discountedPrice);
// Logging the intial price and discount rate, then the calculated discounted price

// Task 10: Arrow Function
const calculatePoints = purchaseAmount => purchaseAmount / 10;
// created an arrow function which calculates points earned based on the purchase amount

let points = Math.floor(calculatePoints(453));
// using math floor to round the points down

console.log("Purchase Amount: $", 453);
console.log(`Earned points: ${points}`);
// logging purchase amount and the calculated points earned












    








