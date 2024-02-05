import * as React from "react";

function IconLetterM({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-letter-m" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/letter-m"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 20v-16l6 14l6 -14v16" /></svg>;
}

export default IconLetterM;