function salesNetProfitNorth(cogs:number,expense:number=0,actualsales:number,gst?:number): number{
    let gstAmount = 0;
    if(gst){
        gstAmount =  actualsales *gst/100;
    }

    return actualsales -(cogs+gstAmount+expense);
}

console.log("Sales Profit with GST  - "+ salesNetProfitNorth(12000,13000,15000000,18));
console.log("Sales Profit without GST  - "+ salesNetProfitNorth(12000,13000,15000000));