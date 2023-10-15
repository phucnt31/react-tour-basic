import { useState } from "react";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState([]);

  return (
    <main>
      <Tours />
    </main>
  );
};
export default App;
