import { useState } from "react";
import Item from "./item";

const items = [
  { name: "Dashboard", className: "igloo" },
  { name: "Customers", className: "users" },
  { name: "Porojects", className: "clipboard-list" },
  { name: "Orders", className: "shipping-bag" },
  { name: "Tnventory", className: "receipt" },
  { name: "Accounts", className: "user-circle" },
  { name: "Tasks", className: "clipboard-list" },
];

export default function SideBar({ isActive }) {
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <div className={`sidebar ${isActive ? "active" : ""}`}>
      <div className="sidebar-brand">
        <h2>
          <span className="las la-igloo" />
          <span>Accusoft</span>
        </h2>
      </div>

      <div className="sidebar-menu">
        <ul>
          {items.map((item, index) => (
            <Item
              key={index}
              {...item}
              onClick={() => setActiveItem(item.name)}
              active={item.name === activeItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
