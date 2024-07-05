import { MouseEvent } from "react";

function ListGroup() {
  const ListOfItems = [
    "Pakistan",
    "India",
    "Bangladesh",
    "America",
    "London",
    "France",
  ];

  const handleClick = (event: MouseEvent) =>
    console.log(event.currentTarget.textContent);

  //   const ListOfItems = [];
  return (
    <>
      <h1>List</h1>
      {ListOfItems.length === 0 && <p>No Item found</p>}
      <ul className="list-group">
        {ListOfItems.map((item) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
