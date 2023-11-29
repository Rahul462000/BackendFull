import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
function App() {
  // to get the data from jokes
  const [jokes, setJokes] = useState([]);

  // when website is loaded the data will be shown immediately
  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        console.log(response.data);
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div>Hello this is frontend</div>
      <p>JOKES:{jokes.length}</p>
      {/* a loop for the jokes coming from thee backend */}
      {/* loop is important because of the array structure */}
      {/* id title content are coming from the backend data of the joke */}
      {jokes.map((joke, index) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
          <p>CeatedBy:{joke.creatorName}</p>
        </div>
      ))}
    </>
  );
}

export default App;
