import { useState } from "react";

function ListGroup() {
  const ListOfItems = [
    "Pakistan",
    "India",
    "Bangladesh",
    "America",
    "London",
    "France",
  ];

  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>List</h1>
      {ListOfItems.length === 0 && <p>No Item found</p>}
      <ul className="list-group">
        {ListOfItems.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
