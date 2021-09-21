var AnnualUsage = 250.00;
var OrderingCost = 30.00;
var HoldingCost = 15.00;
var UnitCost = 5.00;
var EOQ = Math.sqrt((2*AnnualUsage*OrderingCost)/(HoldingCost*UnitCost));