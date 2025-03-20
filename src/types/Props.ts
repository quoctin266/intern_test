export {};

declare global {
  interface IProductCardProps {
    product: IProduct;
  }

  interface IProductListProps {
    products: IProduct[];
  }
}
