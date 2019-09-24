function salesNetProfitNorth(cogs, expense = 0, actualsales, gst) {
    let gstAmount = 0;
    if (gst) {
        gstAmount = actualsales * gst / 100;
    }
    return actualsales - (cogs + gstAmount + expense);
}
console.log("Sales Profit with GST  - " + salesNetProfitNorth(12000, 13000, 15000000, 18));
console.log("Sales Profit without GST  - " + salesNetProfitNorth(12000, 13000, 15000000));
//# sourceMappingURL=optional-default-parameters.js.map