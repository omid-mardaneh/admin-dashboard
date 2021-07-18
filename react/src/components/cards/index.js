import Card from "./card";

const data = [
  { number: "54", name: "Customers", className: "users" },
  { number: "79", name: "Projects", className: "clipboard-list" },
  { number: "124", name: "Orders", className: "shopping-bag" },
  { number: "33", name: "income", className: "google-wallet" },
];

export default function Cards() {
  return (
    <div className="cards">
      {data.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
}
