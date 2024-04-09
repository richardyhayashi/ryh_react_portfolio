import { useState } from "react";
import UseEffectComponent from "./useEffectComponent";

const useEffectHook = () => {
  const [displayFlag,setDisplayFlag] = useState(true); 

  return (
    <div>
        <h1>UseEffect Hook</h1>
        <div>
            <button
              className="w-40 border"
              onClick={() => setDisplayFlag(!displayFlag)}>
                Toggle Component
            </button>
        </div>
        { displayFlag ? <UseEffectComponent /> : "" }
    </div>
  )
}

export default useEffectHook