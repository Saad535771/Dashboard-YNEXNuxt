import * as React from "react";

function IconArrowAutofitDown({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-autofit-down" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/arrow-autofit-down"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8" /><path d="M18 4v17" /><path d="M15 18l3 3l3 -3" /></svg>;
}

export default IconArrowAutofitDown;