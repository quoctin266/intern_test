export {};

declare global {
  interface IProduct {
    id: string;
    title: string;
    image: string;
    price: number;
    sold?: number;
    flashSale?: string;
    discount?: number;
    freeShip: boolean;
    gift: boolean;
  }
}
