function invoice(gstRate = 0.18, ...items) {
    let subtotal = 0;

    for (let i = 0; i < items.length; i++) {
        const item = items[i];

        // Stop processing
        if (item.name === "STOP") {
            break;
        }
        if (
            !item.hasOwnProperty("price") ||
            !item.hasOwnProperty("qty") ||
            item.price <= 0 ||
            item.qty <= 0
        ) {
            continue;
        }

        subtotal += item.price * item.qty;
    }

    const gst = subtotal * gstRate;
    const total = subtotal + gst;

    return { subtotal, gst, total };
}


const bill = invoice(
    0.18,
    { name: "Pen", price: 20, qty: 3 }
);

console.log(bill);
