import React, { useEffect, useState } from "react";

const UseAsyncAwait = () => {
  const [ApiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
      const data = await response.json();
      setApiData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // console.log(ApiData);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      <section>
        <div className="card">
          <img
            src={ApiData.sprites.other.dream_world.front_default}
            alt="CardImage"
            className="card-image"
          />
          <div className="card-content">
            <h2 className="card-title">{ApiData.name}</h2>
          </div>
          <div className="card-footer">
            <p>
              Height: <span>{ApiData.height}</span>
            </p>
            <p>
              Weight: <span>{ApiData.weight}</span>
            </p>
            <p>
              Speed: <span>{ApiData.stats[5].base_stat}</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default UseAsyncAwait;
