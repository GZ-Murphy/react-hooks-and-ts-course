import React, {PureComponent,useState,useEffect, useRef} from "react";
interface iCountLabel{
  count:number;
}

class ConstComp extends PureComponent {
  render() {
    return <div>Hello</div>;
  }
}
function CountLabel({ count  }:iCountLabel) {
  const color = count > 10 ? "red" : "blue";
  console.log(count)
  const ref = useRef();
  useEffect(() => {
    console.log(ref.current);
}, []);
  return <span style={{ color }} ref={ref}>{count}</span>;
}

export default function Counter() {
  const oldCount = 0
 
  const [count, setCount] = React.useState(oldCount);

  return (
    <div>
      <button onClick={() =>{
         console.log(oldCount)
        setCount( count + 1)
      }}>
        <CountLabel count={count} />
        <ConstComp />

      </button>
    </div>
  );
}
