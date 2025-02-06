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







    








