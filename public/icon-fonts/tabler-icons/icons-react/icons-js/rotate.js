import * as React from "react";

function IconRotate({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-rotate" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/rotate"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19.95 11a8 8 0 1 0 -.5 4m.5 5v-5h-5" /></svg>;
}

export default IconRotate;