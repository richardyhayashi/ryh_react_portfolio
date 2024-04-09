import { useEffect, useRef, useState } from "react";
import clip from "../../../public/audio/file_example_MP3_700KB.mp3";

const useRefHook = () => {
  const [name, setName] = useState("");
  const [flag, setFlag] = useState(false);
  const inputEle = useRef<HTMLInputElement>(null);
  console.log(inputEle);
  const audioEle = useRef<HTMLAudioElement>(null);

  const resetInput = () => {
    setName("");
    inputEle.current?.focus();
  }

  const handleAudio = () => {
    if (flag) {
      audioEle.current?.pause();
      setFlag(false);
      return;
    }

    audioEle.current?.play();
    setFlag(true);
  }

  useEffect(() => {
    setFlag(true);
    audioEle.current?.play();
  }, []);

  return (
    <div>
        <h1>UseRef Hook</h1>
        <div className="flex flex-col items-start">
          <div className="h-8">
            {name}
          </div>
            <div>
              <input
                ref={inputEle}
                type="text"
                name="name"
                value={name}
                className="w-32 border"
                onChange={(e) => setName(e.target.value)} />
              <button className="w-16 border" onClick={resetInput}>Reset</button>
            </div>
            <audio ref={audioEle} src={clip} />
            <button className="w-16 border" onClick={() => handleAudio()}>{ flag ? 'Stop' : 'Start'}</button>
        </div>
    </div>
  );
}

export default useRefHook;