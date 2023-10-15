import { useEffect, useState } from "react";
import Tours from "./Tours";
import Loading from "./Loading";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTours = async () => {
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setIsLoading(false);
      setTours(data);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  const removeItem = (id) => {
    const newItem = tours.filter((item) => item.id !== id);
    setTours(newItem);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <main>
      <h3 className="title">Our torus</h3>
      <div className="title-underline"></div>
      <Tours tours={tours} removeItem={removeItem} />
    </main>
  );
};
export default App;
