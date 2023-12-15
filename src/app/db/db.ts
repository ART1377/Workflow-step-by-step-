import { Product } from "../../../next-type-d";

export const products: Product[] = [
  {
    productId: "1",
    productName: "Product 1",
    productDescription: "Description for Product 1",
    steps: [
      {
        person: { personName: "John", personId: "001" },
        state: "rejected",
        step: 1,
        file: null,
      },
      {
        person: { personName: "Fatima", personId: "002" },
        state: "succeed",
        step: 2,
        file: null,
      },
      {
        person: { personName: "Ella", personId: "003" },
        state: "rejected",
        step: 3,
        file: null,
      },
      {
        person: { personName: "Sophia", personId: "007" },
        state: "default",
        step: 4,
        file: null,
      },
      {
        person: { personName: "Ella", personId: "003" },
        state: "default",
        step: 5,
        file: null,
      },
    ],
  },
  {
    productId: "2",
    productName: "Product 2",
    productDescription: "Description for Product 2",
    steps: [
      {
        person: { personName: "Ella", personId: "003" },
        state: "succeed",
        step: 1,
        file: null,
      },
      {
        person: { personName: "Adam", personId: "004" },
        state: "succeed",
        step: 2,
        file: null,
      },
      {
        person: { personName: "Sophia", personId: "007" },
        state: "default",
        step: 3,
        file: null,
      },
      {
        person: { personName: "Adam", personId: "004" },
        state: "default",
        step: 4,
        file: null,
      },
      {
        person: { personName: "Sophia", personId: "007" },
        state: "default",
        step: 5,
        file: null,
      },
    ],
  },
  {
    productId: "3",
    productName: "Product 3",
    productDescription: "Description for Product 3",
    steps: [
      {
        person: { personName: "Alex", personId: "005" },
        state: "rejected",
        step: 1,
        file: null,
      },
      {
        person: { personName: "Isaac", personId: "006" },
        state: "rejected",
        step: 2,
        file: null,
      },
      {
        person: { personName: "Sophia", personId: "007" },
        state: "rejected",
        step: 3,
        file: null,
      },
      {
        person: { personName: "Isaac", personId: "006" },
        state: "default",
        step: 4,
        file: null,
      },
      {
        person: { personName: "Adam", personId: "004" },
        state: "default",
        step: 5,
        file: null,
      },
    ],
  },
  {
    productId: "4",
    productName: "Product 4",
    productDescription: "Description for Product 4",
    steps: [
      {
        person: { personName: "Isaac", personId: "006" },
        state: "succeed",
        step: 1,
        file: null,
      },
      {
        person: { personName: "Sophia", personId: "007" },
        state: "rejected",
        step: 2,
        file: null,
      },
      {
        person: { personName: "Robert", personId: "010" },
        state: "default",
        step: 3,
        file: null,
      },
      {
        person: { personName: "Isaac", personId: "006" },
        state: "default",
        step: 4,
        file: null,
      },
      {
        person: { personName: "Harrison", personId: "008" },
        state: "default",
        step: 5,
        file: null,
      },
    ],
  },
  {
    productId: "5",
    productName: "Product 5",
    productDescription: "Description for Product 5",
    steps: [
      {
        person: { personName: "Sophia", personId: "007" },
        state: "rejected",
        step: 1,
        file: null,
      },
      {
        person: { personName: "Harrison", personId: "008" },
        state: "rejected",
        step: 2,
        file: null,
      },
      {
        person: { personName: "Isaac", personId: "006" },
        state: "default",
        step: 3,
        file: null,
      },
      {
        person: { personName: "Robert", personId: "010" },
        state: "rejected",
        step: 4,
        file: null,
      },
      {
        person: { personName: "Alex", personId: "005" },
        state: "default",
        step: 5,
        file: null,
      },
    ],
  },
  {
    productId: "6",
    productName: "Product 6",
    productDescription: "Description for Product 6",
    steps: [
      {
        person: { personName: "Emily", personId: "009" },
        state: "rejected",
        step: 1,
        file: null,
      },
      {
        person: { personName: "Harrison", personId: "008" },
        state: "default",
        step: 2,
        file: null,
      },
      {
        person: { personName: "Harrison", personId: "008" },
        state: "default",
        step: 3,
        file: null,
      },
      {
        person: { personName: "Alex", personId: "005" },
        state: "default",
        step: 4,
        file: null,
      },
      {
        person: { personName: "Isaac", personId: "006" },
        state: "default",
        step: 5,
        file: null,
      },
    ],
  },
  {
    productId: "7",
    productName: "Product 7",
    productDescription: "Description for Product 7",
    steps: [
      {
        person: { personName: "Harrison", personId: "008" },
        state: "rejected",
        step: 1,
        file: null,
      },
      {
        person: { personName: "Robert", personId: "010" },
        state: "succeed",
        step: 2,
        file: null,
      },
      {
        person: { personName: "Emily", personId: "009" },
        state: "rejected",
        step: 3,
        file: null,
      },
      {
        person: { personName: "Alex", personId: "005" },
        state: "default",
        step: 4,
        file: null,
      },
      {
        person: { personName: "Isaac", personId: "006" },
        state: "default",
        step: 5,
        file: null,
      },
    ],
  },
  {
    productId: "8",
    productName: "Product 8",
    productDescription: "Description for Product 8",
    steps: [
      {
        person: { personName: "William", personId: "011" },
        state: "rejected",
        step: 1,
        file: null,
      },
      {
        person: { personName: "Samantha", personId: "008" },
        state: "rejected",
        step: 2,
        file: null,
      },
      {
        person: { personName: "Greg", personId: "012" },
        state: "rejected",
        step: 3,
        file: null,
      },

      {
        person: { personName: "William", personId: "011" },
        state: "default",
        step: 4,
        file: null,
      },
      {
        person: { personName: "Emily", personId: "009" },
        state: "default",
        step: 5,
        file: null,
      },
    ],
  },
  {
    productId: "9",
    productName: "Product 9",
    productDescription: "Description for Product 9",
    steps: [
      {
        person: { personName: "Samantha", personId: "008" },
        state: "succeed",
        step: 1,
        file: null,
      },
      {
        person: { personName: "William", personId: "011" },
        state: "succeed",
        step: 2,
        file: null,
      },
      {
        person: { personName: "Alex", personId: "005" },
        state: "default",
        step: 3,
        file: null,
      },
      {
        person: { personName: "Greg", personId: "012" },
        state: "default",
        step: 4,
        file: null,
      },
      {
        person: { personName: "Robert", personId: "010" },
        state: "default",
        step: 5,
        file: null,
      },
    ],
  },
  {
    productId: "10",
    productName: "Product 10",
    productDescription: "Description for Product 10",
    steps: [
      {
        person: { personName: "Ella", personId: "003" },
        state: "rejected",
        step: 1,
        file: null,
      },
      {
        person: { personName: "Adam", personId: "004" },
        state: "rejected",
        step: 2,
        file: null,
      },
      {
        person: { personName: "Ella", personId: "003" },
        state: "rejected",
        step: 3,
        file: null,
      },
      {
        person: { personName: "Robert", personId: "010" },
        state: "default",
        step: 4,
        file: null,
      },
      {
        person: { personName: "William", personId: "011" },
        state: "default",
        step: 5,
        file: null,
      },
    ],
  },
];
