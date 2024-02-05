import * as React from "react";

function IconBallpenOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-ballpen-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/ballpen-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14 6l7 7l-2 2" /><path d="M10 10l-4.172 4.172a2.828 2.828 0 1 0 4 4l4.172 -4.172" /><path d="M16 12l4.414 -4.414a2 2 0 0 0 0 -2.829l-1.171 -1.171a2 2 0 0 0 -2.829 0l-4.414 4.414" /><path d="M4 20l1.768 -1.768" /><path d="M3 3l18 18" /></svg>;
}

export default IconBallpenOff;