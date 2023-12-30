import { Fragment, useState } from "react"; //so we dont need to use this
import { MouseEvent } from "react";
//use this interface so that other components can also use this Props
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectItem}: Props) {
  //   const msg = () => {
  //     items.length === 0 && <p>No items found</p>;
  //   }; //if condition is true, the result of the expression is the paragraph
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //   arr[0] //variable
  //   arr[1] //updater function
  //This is the event handler for handle click
  //   const handleClick = (event: MouseEvent) => console.log(event);
  return (
    //Fragment that tells react to wrap these
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li> // react needs a key to keep track of the elements
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
