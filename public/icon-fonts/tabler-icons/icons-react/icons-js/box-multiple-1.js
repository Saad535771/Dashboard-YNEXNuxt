import * as React from "react";

function IconBoxMultiple1({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-box-multiple-1" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/box-multiple-1"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x={7} y={3} width={14} height={14} rx={2} /><path d="M17 17v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2" /><path d="M14 14v-8l-2 2" /></svg>;
}

export default IconBoxMultiple1;