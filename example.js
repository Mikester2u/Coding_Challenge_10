//U22562170
document.addEventListener('DOMContentLoaded', function() {
    d3.csv('data/purchase_orders.csv').then(function(data) {
        
        const ul = d3.select('#purchase-orders');

        data.forEach(function(d) {
            ul.append('li')
            .text('${d.customerName} - Order ID: ${d.orderID: ${d.purchaseAmount}');
        });
    })
});