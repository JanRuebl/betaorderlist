import React from "react";
import UserCard from "./UserCard";

// const UserData ist meine dummyApi
const userData = [
  {
    firstName: "Max",
    lastName: "Mustermann",
    orders: [
      {
        numOfOrder: 1,
        orderedProducts: [
          { productName: "Desk", price: 249.99 },
          { productName: "Chair", price: 129.99 },
        ],
      },
    ],
  },
  {
    firstName: "Peter",
    lastName: "Mueller",
    orders: [
      {
        numOfOrder: 1,
        orderedProducts: [
          { productName: "Maus", price: 49.99 },
          { productName: "Tastatur", price: 120.0 },
        ],
      },
      {
        numOfOrder: 2,
        orderedProducts: [
          { productName: "Mikrofasertuch", price: 7.49 },
          { productName: "Teppich", price: 300.0 },
        ],
      },
      {
        numOfOrder: 3,
        orderedProducts: [{ productName: "Monitor", price: 239.79 }],
      },
    ],
  },
  {
    firstName: "Julia",
    lastName: "Vogt",
    orders: [
      {
        numOfOrder: 2,
        orderedProducts: [{ productName: "Handy Ladekabel", price: 13.9 }],
      },
      {
        numOfOrder: 1,
        orderedProducts: [
          { productName: "Laptop Tragetaschen", price: 39.99 },
          { productName: "Laptop", price: 742.9 },
        ],
      },
    ],
  },
];

export default function Customerinfo() {
  // User werden alphabetisch sortiert
  userData.sort(function (a, b) {
    return a.lastName.localeCompare(b.lastName);
  });
  return (
    <div>
      <h1>info</h1>
      {userData.map((user) => (
        <>
          <UserCard key={user.firstName} cardData={user}></UserCard>
        </>
      ))}
    </div>
  );
}
