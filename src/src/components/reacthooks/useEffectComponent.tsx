import { useEffect, useState } from "react";

const useEffectComponent = () => {
  const [time, setTime] = useState(new Date().toString());
  const [message, setMessage] = useState("Functional component");

  const showDate = () => {
    setTime(new Date().toString());
  }

  useEffect(() => {
    console.log('Component Mounted or updated.');

    const interval = setInterval(showDate, 1000);

    return () => {
        console.log("Cleanup");
        clearInterval(interval);
    }
  }, [time]);

  return (
    <div>
        <div>{time}</div>
        <button onClick={showDate}>Show Date</button>
        <div>{message}</div>
        <button onClick={() => setMessage("Changed Functional Component")}>
            Change Message
        </button>
    </div>
  );
}

export default useEffectComponent;