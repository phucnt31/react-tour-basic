import { useEffect, useState } from "react";
import Tours from "./Tours";
import Loading from "./Loading";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTours = async () => {
    try {
      setIsLoading(true);
      // for refetch function to work
      // set loading to true again at beginning
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
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeItem={removeItem} />
    </main>
  );
};
export default App;
