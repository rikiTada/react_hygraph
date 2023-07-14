import "./App.css";
import { gql, useQuery } from "@apollo/client";

const DOGS = gql`
  query MyQuery {
    dogs {
      id
      name
      description
      thumbnial {
        url
      }
    }
  }
`;
function App() {
  const { data, loading, error } = useQuery(DOGS);

  if (loading) return "Loading…";
  if (error) return `error:${error.message}`;

  return (
    <>
      <h1>GraphQL React</h1>
      <div className="dogsContainer">
        {data.dogs.map((dog) => (
          <div key={dog.id}>
            <div className="dogCard">
              <img src={dog.thumbnial.url} alt="" />
              <p>{dog.name}</p>
              <p>{dog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
