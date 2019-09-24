const IndiaOffices = ["Banglore", "Chennai", "Hyderabad", "Mumbai", "Pune"];
for (let index = 0; index < IndiaOffices.length; index++) {
    const element = IndiaOffices[index];
    console.log(element);
}
IndiaOffices.forEach(function (city, index) {
    console.log(city);
});
for (const city of IndiaOffices) {
    console.log(city);
    if (city === "Hyderabad") {
        break;
    }
}
//# sourceMappingURL=arrays.js.map