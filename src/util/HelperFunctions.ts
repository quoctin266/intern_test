export const currencyFormatter = (price: number) => {
  return new Intl.NumberFormat("VN", {
    style: "currency",
    currency: "VND",
  }).format(price);
};

export const formatSold = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    notation: "compact",
    compactDisplay: "short",
    maximumFractionDigits: 1,
  })
    .format(amount)
    .replace(".", ",");
};
