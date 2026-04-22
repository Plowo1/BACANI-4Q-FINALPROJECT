//calculates the subtotal
function calculateSubtotal(serviceInput, sessionsInput){
    //creates a variable named price and assigns a value to it
    let price = 0;
    switch(serviceInput){
        case "Dental Check-up (PHP 850)":
            price = 850;
            break;

        case "Eye Check-up (PHP 900)":
            price = 900;
            break;
        
        case "Physical Exam (PHP 800)":
            price = 800;
            break;
        default:
            return "An unexpected error happened";
    }
    //multiplies the price with the sessions
    price = price * sessionsInput;
    //Returns the price
    return price;
}

//calculates the discount
function calculateDiscount(subTotal, customerType){
    //Switch that determnines what type of customer it is
    let discount = 0;
    switch(customerType){
        case "discounted":
        discount = subTotal * 0.15;
        break;   
    }
    //Returns value
    return discount;
    
}

function printSummary(){
    //Getting the variables that were inputted
    let nameInput = document.getElementById("name").value;
    let numberInput = document.getElementById("number").value;
    let serviceInput = document.getElementById("service").value;
    let sessionsInput = parseInt(document.getElementById("sessions").value);
    let custTypeInput = document.getElementById("customerType").value;

    //Function calls and final total
    let subTotal = calculateSubtotal(serviceInput, sessionsInput);
    let discount = calculateDiscount(subTotal, custTypeInput);
    let total = subTotal - discount;

    //Printing the values
    document.getElementById("nameOutput").innerHTML = "Name: " + nameInput;
    document.getElementById("numberOutput").innerHTML = "Grade & Section: " + numberInput;
    document.getElementById("serviceOutput").innerHTML = "Order: " + serviceInput;
    document.getElementById("sessionsOutput").innerHTML = "Quantity: " + sessionsInput;
    document.getElementById("subtotalOutput").innerHTML = "Subtotal: PHP " + subTotal;
    document.getElementById("discountOutput").innerHTML = "Discount: PHP " + discount;
    document.getElementById("totalOutput").innerHTML = "Total: PHP " + total;

    //Returns false
    return false; 
}
