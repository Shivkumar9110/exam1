// Define the arrow function to calculate total cost
const calculateTotalCost = (cart) => {
    // Check if the cart is not empty
    if (cart.length === 0) {
      return 0; // Return 0 if the cart is empty
    }
  
    // Use the reduce function to calculate the total cost
    const totalCost = cart.reduce((acc, item) => {
      // Calculate the cost for each item (unit price * quantity) and add it to the accumulator
      return acc + (item.unitPrice * item.quantity);
    }, 0); // Initialize the accumulator with 
}  