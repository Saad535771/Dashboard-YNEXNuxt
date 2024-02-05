import * as React from "react";

function IconEqual({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-equal" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/equal"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 9h14m-14 6h14" /></svg>;
}

export default IconEqual;