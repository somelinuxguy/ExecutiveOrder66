var clearDisplay = function() {
    console.log("Clearing Display");
    var container = document.querySelector(".currentOrders");
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
}

var populateOrderPage = function(orderList) {
    console.log(orderList);
    console.log("Populating Orders Page");
    clearDisplay();

    var container = document.querySelector(".currentOrders");
    // write the orders in to the new currentOrders div (named container)
    orderList.forEach(function(order) {
        var orderDIV = document.createElement('div');
        var orderP = document.createElement('p');
        orderDIV.classList.add('order');
        //fill the elements
        const templateStr = `Email: ${order.emailAddress} Strength: ${order.strength} Size: ${order.size} Adulterants: ${order.flavor} Coffee: ${order.coffee}`;
        orderP.textContent = templateStr;
        // add them to the DOM
        orderDIV.appendChild(orderP);
        container.appendChild(orderDIV);
        // remove order event handler

        var removeOrder = function(event) {
            removeOrderAPI(order);
        };

        orderDIV.addEventListener('click',removeOrder);
    });
}

var newOrder = function(event) {
    event.preventDefault();
    console.log('New Order In.');
    var myEmail = document.querySelector('[name="emailAddress"]');
    var myCoffee = document.querySelector('[name="coffee"]');
    var myFlavor = document.querySelector('[name="flavor"]');
    var myStrength = document.querySelector('[name="strength"]');
    var mySize = document.querySelector('[name="size"]:checked');
    var orderInfo = {
        emailAddress: myEmail.value,
        coffee: myCoffee.value,
        flavor: myFlavor.value,
        strength: myStrength.value,
        size: mySize.value
        };
    console.log(orderInfo);
    saveOrder(orderInfo);
}
