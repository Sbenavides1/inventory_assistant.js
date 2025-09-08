// Coding Challenge 02a

//step 1
let itemName = "wireless Headphones";
let unitCost = 59.99;
let currentStock = 75;
let reorderLevel = 50;
let targetStock = 200;
let weeklyDemand = 30;
let supplierLeadTimeWeeks = 3;

//step 2
let weeksOfCover = weeklyDemand > 0 ? currentStock / weeklyDemand : Infinity
let stockDeficit = Math.max(0, targetStock - currentStock);
let reorderNow = (currentStock <= reorderLevel) || (weeksOfCover <= supplierLeadTimeWeeks);
let reorderQuantity = reorderNow ? Math.ceil(stockDeficit) : 0;
let estimatedReorderCost = reorderQuantity * unitCost;

//step 3
console.log("Item:" + itemName);

if (Number.isFinite(weeksOfCover)) {
    console.log("Weeks of Cover:" + weeksOfCover.toFixed(2));
} else {
    console.log("Weeks of Cover: Infinity (no demand)");
}

console.log("Reorder now?: " + reorderNow);
console.log("Recommended Reorder Quantity: " + reorderQuantity);
console.log("Estimated Cost: $" + estimatedReorderCost.toFixed(2));