import axios from "axios";
import { useEffect, useState } from "react";
interface InsultData {
  insult: string;
  play: string;
}

export const Insult = () => {
  const [insult, setInsult] = useState<InsultData | null>(null);

  useEffect(() => {
    fetchRandomInsult();
  }, []);

  const fetchRandomInsult = async () => {
    try {
      const response = await axios.get("http://localhost:5000/random-insult");
      console.log(response.data);

      setInsult(response.data);
    } catch (error) {
      console.error("Error fetching the insult", error);
    }
  };
  return (
    <div>
      <h1>Shakespeare Insult</h1>
      {insult ? (
        <div>
          <p>"{insult.insult}"</p>
          <p>
            <em>- {insult.play}</em>
          </p>
          <button onClick={fetchRandomInsult}>Get Another Insult</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
