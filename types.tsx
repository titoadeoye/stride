export type Product = {
  title: string;
  description: string;
  price: number;
  currency: "NGN" | "USD";
  image: string;
  thumbnails: null | string[];
  metadata: Record<string, string>;
};
