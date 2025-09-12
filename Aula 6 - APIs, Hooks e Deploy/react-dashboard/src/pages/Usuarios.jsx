import { useEffect } from "react";

export default function Usuarios() {
  useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(erro => console.log(erro))
  .finally(console.log("Carregou desgraça"))
  },[])
  return (
    <div className="p-6 flex-1 bg-gray-100">
      <h1 className="text-2xl font-bold">Usuários</h1>
    </div>
  );
}
