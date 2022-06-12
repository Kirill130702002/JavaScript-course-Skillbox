function cart(basketAmount, countGoods, promo = null) {

  let totalAmount = basketAmount;
  if (promo === 'ДАРИМ300' && basketAmount < 300) {
    totalAmount = 0;
    console.log('ДАРИМ300 ' + totalAmount);
  } else if (promo === 'ДАРИМ300') {
    totalAmount -= 300;
    console.log('ДАРИМ300 ' + totalAmount);
  }

  if (countGoods >= 10) {
    let countFiveProcent = totalAmount / 100 * 5;
    totalAmount -= countFiveProcent;
    console.log('больше 10 товаров ' + totalAmount);
  }

  if (totalAmount > 50000) {
    let countDifference = totalAmount - 50000;
    let countTwentyProcent = countDifference / 100 * 20;
    totalAmount = totalAmount - countTwentyProcent;
    console.log('скидка больше 50 000 ₽ ' + totalAmount);
  }

  if (totalAmount >= 20000 && promo === 'СКИДКА15') {
    let countFifteenProcent = totalAmount / 100 * 15;
    totalAmount -= countFifteenProcent;
    console.log('СКИДКА15 ' + totalAmount);
  }
  return totalAmount;
};

//cart(55000, 12, 'СКИДКА15');

export default cart;

