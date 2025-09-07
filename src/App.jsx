import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const App = () => {
  const [second, setSecond] = useState(0);
  const timer = useRef(null);
  const storeRef = useRef();
  const [second2, setSecond2] = useState(0);
  const timer1 = useRef(null);
  const storeRef1 = useRef();
  const [second3, setSecond3] = useState(0);
  const timer2 = useRef(null);
  const storeRef2 = useRef();
  const { contextSafe } = useGSAP();
  var tl = gsap.timeline();
  var tl1 = gsap.timeline();

  var tl2 = gsap.timeline();

  const settimer = contextSafe(() => {
    timer.current = setInterval(() => {
      tl.to(storeRef.current, {
        yPercent: 100,
        opacity: 0.1,
        onComplete: () => {
          setSecond((pre) => pre + 1);
        },
      });

      tl.set(storeRef.current, { opacity: 0.1 });
      tl.from(storeRef.current, {
        yPercent: -100,
        opacity: 1,
      });

      console.log(second);
    }, 1000);

    // t2

    timer1.current = setInterval(() => {
      tl1.to(storeRef1.current, {
        yPercent: 100,
        opacity: 0.1,
        onComplete: () => {
          setSecond2((pre) => pre + 1);
        },
      });

      tl1.set(storeRef1.current, { opacity: 0.1 });
      tl1.from(storeRef1.current, {
        yPercent: -100,
        opacity: 1,
      });

      console.log(second2);
    }, 10000);

    //  t3

    timer2.current = setInterval(() => {
      tl2.to(storeRef2.current, {
        yPercent: 100,
        opacity: 0.1,
        onComplete: () => {
          setSecond3((pre) => pre + 1);
        },
      });

      tl2.set(storeRef2.current, { opacity: 0.1 });
      tl2.from(storeRef2.current, {
        yPercent: -100,
        opacity: 1,
      });

      console.log(second3);
    }, 60000);
  });
  const startButton = contextSafe(() => {
    settimer();
  });
  // const stopButton = contextSafe(() => {
  //   clearInterval(timer.current);
  //   clearInterval(timer1.current);

  //   clearInterval(timer2.current);
  // });
  const resetButton = contextSafe(() => {
    clearInterval(timer.current);
    timer.current = null;
    setSecond(0);

    clearInterval(timer1.current);
    timer1.current = null;
    setSecond2(0);

    clearInterval(timer2.current);
    timer2.current = null;
    setSecond3(0);
  });

  useGSAP(() => {});

  return (
    <div>
      <div className="h-[100vh] 2xl:container mx-auto ">
        <div className="w-4/5 mx-auto flex justify-center items-center h-full">
          <div className="flex flex-col items-center gap-5">
            <h1 className="text-4xl font-bold ">Stop Watch</h1>
            <div className="overflow-y-hidden flex  items-center justify-center gap-1 text-gray-500">
              <span ref={storeRef2} className="block text-5xl font-semibold">
                {second3}
              </span>
              <span className="block text-5xl font-semibold">:</span>
              <span ref={storeRef1} className="block text-5xl font-semibold">
                {second2 % 6}
              </span>
              <span ref={storeRef} className="block text-5xl font-semibold">
                {second % 10}
              </span>
            </div>

            <div className="flex  justify-center items-center gap-5 ">
              <button
                onClick={startButton}
                className="py-2 px-5 rounded-lg border-2 text-green-400 border-green-400"
              >
                Start
              </button>
              {/* <button
                onClick={stopButton}
                className="py-2 px-5 rounded-lg border-2 text-red-400 border-red-400"
              >
                Stop
              </button> */}
              <button
                onClick={resetButton}
                className="py-2 px-5 rounded-lg border-2 text-gray-400 border-gray-400"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
