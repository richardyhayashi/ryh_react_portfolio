import { useState } from "react";

const TestButton = () => {
  const [theme, setTheme] = useState(false);

  return (
    <div className={`text-green-400 text-4xl min-h-screen flex flex-col justify-center items-center ${theme ? 'bg-slate-900': 'bg-yellow-200 text-violet-700'}`}>
      <button onClick={() => setTheme(!theme)}>Change</button>
      <button className="bg-white relative after:absolute after:bg-green-300 after:inset-0 after:z-0 after:blur text-slate-900 p-10 hover:opacity-50 duration-300 flex items-center gap-4 group">
        <h1 className="z-10">BUTTON</h1>
        <span className="z-10 h-10 w-10 bg-amber-800 group-hover:rotate-45 duration-300"></span>
      </button>
    </div>
  )
}

export default TestButton;