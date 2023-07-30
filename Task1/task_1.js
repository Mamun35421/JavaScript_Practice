function calculateDiscount(totalAmount) {
    let discount = 0;
  
    if (totalAmount >= 50 && totalAmount <= 100) {
      discount = totalAmount * 0.05; // 5% discount
    } else if (totalAmount > 100 && totalAmount <= 200) {
      discount = totalAmount * 0.10; // 10% discount
    } else if (totalAmount > 200) {
      discount = totalAmount * 0.15; // 15% discount
    }
  
    return discount;
  }
  
  function calculateTotalWithDiscount(totalAmount) {
    const discount = calculateDiscount(totalAmount);
    const discountedTotal = totalAmount - discount;
    return discountedTotal;
  }
  

  const totalPurchaseAmount = 180;
  const discountedAmount = calculateDiscount(totalPurchaseAmount);
  const totalWithDiscount = calculateTotalWithDiscount(totalPurchaseAmount);
  
  console.log("Total Purchase Amount: $" + totalPurchaseAmount.toFixed(2));
  console.log("Discounted Amount: $" + discountedAmount.toFixed(2));
  console.log("Total with Discount: $" + totalWithDiscount.toFixed(2));
  