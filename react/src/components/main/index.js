import Cards from "../cards";
import CardGroup from "../card_group";
import Customer from "../customer";
import Table from "../table";

const customers = [
  { name: "Lewis S. Cunningham", type: "CEO Excerpt" },
  { name: "Lewis S. Cunningham", type: "CEO Excerpt" },
  { name: "Lewis S. Cunningham", type: "CEO Excerpt" },
  { name: "Lewis S. Cunningham", type: "CEO Excerpt" },
];

const header = ["Project Title", "Department", "Status"];

const items = [
  {
    position: "UI/UX Design",
    type: "UI Team",
    color: "purple",
    status: "review",
  },
  {
    position: "Web development",
    type: "Frontend",
    color: "pink",
    status: "in progress",
  },
  {
    position: "Ushop app",
    type: "Mobile Team",
    color: "orange",
    status: "pending",
  },
  {
    position: "UI/UX Design",
    type: "UI Team",
    color: "purple",
    status: "review",
  },
  {
    position: "Web development",
    type: "Frontend",
    color: "pink",
    status: "in progress",
  },
  {
    position: "Ushop app",
    type: "Mobile Team",
    color: "orange",
    status: "pending",
  },
];

export default function Main() {
  return (
    <main>
      <Cards />
      <div className="recent-grid">
        <CardGroup name="Recent Projects" className="projects">
          <Table header={header} items={items} />
        </CardGroup>

        <CardGroup name="New customer" className="customers">
          {customers.map((customer, index) => (
            <Customer key={index} {...customer} />
          ))}
        </CardGroup>
      </div>
    </main>
  );
}
