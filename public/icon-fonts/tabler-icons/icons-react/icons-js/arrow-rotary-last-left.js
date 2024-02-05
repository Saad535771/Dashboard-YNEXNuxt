import * as React from "react";

function IconArrowRotaryLastLeft({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-rotary-last-left" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/arrow-rotary-last-left"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle transform="matrix(-1 0 0 1 30 0)" cx={15} cy={12} r={3} /><path d="M15 15v6" /><path d="M12.5 9.5l-6.5 -6.5" /><path d="M11 3h-5v5" /></svg>;
}

export default IconArrowRotaryLastLeft;