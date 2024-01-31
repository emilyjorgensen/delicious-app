import { useEffect } from "react";

function Popular() {
  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const apiKey = import.meta.env.VITE_APP_API_KEY;
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_APP_API_KEY}&number=9`
    );
    const data = await api.json();
    console.log(import.meta.env);
    console.log(apiKey);
    console.log(data);
  };

  return <div>Popular</div>;
}

export default Popular;
