import { ProductType } from "@/type/productType";

export const products = [
  {
    id: "1",
    brand: "Apple iPhone 16",
    specs: "128GB|Teal",
    price: "$700.00",
    image: require("../assets/images/iphone.png"),
  },
  {
    id: "2",
    brand: "M4 Macbook Air 13”",
    specs: "256GB|Sky blue",
    price: "$1000.00",
    image: require("../assets/images/macbook.png"),
  },
  {
    id: "3",
    brand: "Google Pixel 9A",
    specs: "128GB|Iris",
    price: "$499.00",
    image: require("../assets/images/google-pixel.png"),
  },
  {
    id: "4",
    brand: "Apple Airpods 4",
    specs: "Active Noise Cancellation...",
    price: "$129.00",
    image: require("../assets/images/airpod.png"),
  },
];

export const productsMap: Record<string, ProductType> = {
  "1": {
    id: "1",
    brand: "Apple iPhone 16",
    specs: "128GB|Teal",
    price: "700.00",
    image: require("../assets/images/iphoneDetails.png"),
    description: [
      "This pre-owned product is not Apple certified, but has been professionally inspected, tested and cleaned by Amazon-qualified suppliers.",
      "There will be no visible cosmetic imperfections when held at an arms length.",
    ],
  },
  "2": {
    id: "2",
    brand: "M4 Macbook Air 13”",
    specs: "256GB|Sky blue",
    price: "1000.00",
    image: require("../assets/images/macbookDetails.png"),
    description: [
      "This laptop features a sleek, ultra-thin design with Apple's powerful M4 chip.",
      "Professionally tested for quality and battery efficiency by trusted resellers.",
    ],
  },
  "3": {
    id: "3",
    brand: "Google Pixel 9A",
    specs: "128GB|Iris",
    price: "499.00",
    image: require("../assets/images/pixelDetails.png"),
    description: [
      "Certified pre-owned device with excellent camera and display quality.",
      "Inspected and tested to ensure top performance and no visible wear.",
    ],
  },
  "4": {
    id: "4",
    brand: "Apple Airpods 4",
    specs: "Active Noise Cancellation...",
    price: "129.00",
    image: require("../assets/images/airpodDetails.png"),
    description: [
      "Fully tested wireless earbuds with active noise cancellation and great fit.",
      "Comes with charging case; offers long battery life and clean appearance.",
    ],
  },
};
