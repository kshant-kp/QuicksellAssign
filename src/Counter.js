import { useEffect, useState } from "react";
import { PutVal } from "./ApiCall";
import { GetVal } from "./ApiCall";
import { CounterValue } from "./CounterValue";
function Counter() {
  let [load, setLoad] = useState(false);
  const [cntrval, setVal] = useState(1);
  const [maxVal, setMax] = useState(1000);

  useEffect(() => {
    GetVal().then((res) => {
      if (res === null) {
        console.log(res);
        setVal(1);
        setMax(1000);
      } else {
        let n = Number(res);
        setVal(n);
        setMax(n);
      }
    });
  }, []);

  function handleChange(e) {
    setLoad(true);
    let newVal = Number(e.target.value);
    setVal(newVal);
    PutVal({ kshant: newVal }).then(() => {
      setLoad(false);
      setMax(newVal);
    });
    console.log(e.target.value);
  }

  return (
    <div className="counter">
      {load && (
        <>
          <div className="loader"></div>
          <div className="load">Saving counter value</div>
        </>
      )}

      <div className="counter-block">
        <input
          type="text"
          className="inp"
          value={cntrval}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <button
        className="btn-m"
        onClick={() => {
          cntrval > 1 && setVal(cntrval - 1);
        }}
      >
        {" "}
        -{" "}
      </button>
      <button
        className="btn-p"
        onClick={() => {
          if (cntrval === maxVal) {
            setVal(1);
          } else {
            setVal(cntrval + 1);
          }
        }}
      >
        {" "}
        +{" "}
      </button>
      <CounterValue maxVal={maxVal} />
    </div>
  );
}

export default Counter;
