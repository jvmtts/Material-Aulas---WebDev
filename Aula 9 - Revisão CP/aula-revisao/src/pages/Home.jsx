 import { useState, useEffect } from "react";
 import Section from "../components/Section";
 import Card from "../components/Card";

 export default function Home() {
 
  const [reactRepos, setReactRepos] = useState([]);
  const API = import.meta.env.VITE_GITHUB_API;

  useEffect(() => {
    fetch(`${API}node&per_pages=5`)
      .then((res) => res.json())
      .then((data) => setReactRepos(data.items));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8">GitHub Repositories Explorer</h1>
      <Section titulo="React">
        {
          reactRepos.map(pegarItem => (
            <Card {...pegarItem}></Card>
          ))
        }
      </Section>
    </div>
  );
}
