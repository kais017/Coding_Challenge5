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
// logging task 5










    








