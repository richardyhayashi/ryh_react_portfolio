import { FormEvent, useState } from "react";

const UseStateHook = () => {
  const [name, setName] = useState("John");
  const [value, setValue] = useState(0);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  }

  return (
    <div>
      <h1>UseState Hook</h1>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <h2>Hello <span>{name}</span></h2>
          <input
            type="text"
            id="name"
            name="name"
            className="border w-32"
            placeholder="Enter name" />
          <button
            type="submit"
            onClick={() => setName('Joe')}
            className="border w-20">
            Click Me
          </button>
        </form>
        <div className="flex flex-col">
        <button className="border w-6" onClick={() => setValue(value + 1)}>+</button>
        <span>{value}</span>
        <button className="border w-6" onClick={() => setValue(value -2)}>-</button>
        </div>
    </div>
  );
}

export default UseStateHook;