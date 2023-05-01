import { MouseEventHandler } from "react";

function Button(props: { value: string; onclick: MouseEventHandler }) {
  return <button onClick={props.onclick}>{props.value}</button>;
}

export default Button;
