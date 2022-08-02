// const getYieldForPlant = (vegetable, environmentFactors) => {
//   let result = 0
// console.log(vegetable)

// if (!environmentFactors) {
//   result = vegetable.yield;
// } else if (environmentFactors.sun === "low") {
//     // console.log(vegetable.factor.sun);
//     result = vegetable.yield * (1 + vegetable.factor.sun.low / 100);
//     // console.log(result);
//   } else if (environmentFactors.sun === "high") {
//     // console.log(vegetable.factor.sun);
//     result = vegetable.yield * (1 + vegetable.factor.sun.high / 100);
//     // console.log(vegetable.yield)
//     // console.log(result);
//   } else if (environmentFactors.sun === "medium") {
//     // console.log(vegetable.factor.sun);
//     result = vegetable.yield * (1 + vegetable.factor.sun.medium / 100);
//     // console.log(result);
//   } else {
//     result = vegetable.yield;
//   }

//   if (!environmentFactors) {
//       result = vegetable.yield;
//   } else if (environmentFactors.wind === "lots") {
//     // console.log(result);
//     result = result * (1 + vegetable.factor.wind.lots / 100);
//     // console.log(result);
//   } else if (environmentFactors === "medium") {
//     result = result * (1 + vegetable.factor.wind.medium / 100);
//   } else if (environmentFactors.wind === "little") {
//     // console.log(result);

//     result = result * (1 + vegetable.factor.wind.little / 100);
//     // console.log(result);
//   }
//   return result;
// };

const getYieldForPlant = (vegetable, environmentFactors) => {
  if (!environmentFactors) return vegetable.yield;

  let yieldWithSun = 0;
  let yieldTotal = 0;

  const sun = vegetable.factor.sun[environmentFactors.sun];
  const wind = vegetable.factor.wind[environmentFactors.wind];

  yieldWithSun = vegetable.yield * (1 + sun / 100);
  yieldTotal = yieldWithSun * (1 + wind / 100);

  return yieldTotal;
};

const getYieldForCrop = (vegetable, environmentFactors) => {
  let result = 0;

  result = Math.round(
    getYieldForPlant(vegetable.crop, environmentFactors) * vegetable.numCrops
  )
  return result;
};

const getTotalYield = (vegetable, environmentFactors) => {
  let getYield = 0;

  vegetable.crops.forEach((vegetable) => {
    // console.log(vegetable.crop)
    getYield += getYieldForCrop(vegetable, environmentFactors);
  });
  return getYield;
};

const getCostsForCrop = (vegetable) => {
  return vegetable.crop.costs * vegetable.numCrops;
};


const getRevenueForCrop = (vegetable, environmentFactors) => {
  const yieldForCrop = getYieldForCrop(vegetable, environmentFactors);

  const total = vegetable.crop.salePrice * yieldForCrop * vegetable.numCrops;

  console.log({ total });

  return total;
};

const getProfitForCrop = (vegetable, environmentFactors ) => {
    const revenueForCrop = getRevenueForCrop(vegetable, environmentFactors);
    const costsForCrop = getCostsForCrop(vegetable, environmentFactors)
    const totalProfit = revenueForCrop - costsForCrop
  return totalProfit
};


const getTotalProfit = (crops) => {

  let totalProfit = 0;

  crops.crops.forEach((crops) => {
    totalProfit += getProfitForCrop(crops);

    // for (i = 0; i < crops.crops.length; i++) {
  });
  return totalProfit;
};

// const getTotalProfit = (vegetable) => {
//     let result = 0
//     vegetable.crops.forEach((crops)) => {
//         result += crops.crop.yied * crops.nuMCrops
//     }
// }

// const firstCrop = crops[0].crop.yield * crops[0].numCrops
// const secondCrop = crops[1].crop.yield * crops[1].numCrops
// return firstCrop + secondCrop

module.exports = {
  getYieldForPlant,
  getYieldForCrop,
  getCostsForCrop,
  getRevenueForCrop,
  getProfitForCrop,
  getTotalYield,
  getTotalProfit,
};
