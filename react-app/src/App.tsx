import ListGroup from "./components/ListGroup";
import Alert from "./components/alert";
import Button from "./components/Button";
import { useState } from "react";
function App() {
  let items = ["New York", "San Francisco", "Los Angeles", "Chicago"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <>
    <div>
      <ListGroup
        items={items}
        heading={"Cities"}
        onSelectItem={handleSelectItem}
      />
    </div>
    <div>
      {alertVisible && <Alert onClose={()=> setAlertVisibility(false)}>
        <div>children</div>
      </Alert>}
    </div>
    <div>
      {alertVisible && <Alert onClose={()=> setAlertVisibility(false)}>My Alert</Alert>}
      <Button color='primary' onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
    </div>
    </>
  );
}

export default App; //always remember to export this!
