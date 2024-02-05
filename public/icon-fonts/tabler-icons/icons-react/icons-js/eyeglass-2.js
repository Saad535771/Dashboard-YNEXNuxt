import * as React from "react";

function IconEyeglass2({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-eyeglass-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/eyeglass-2"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 4h-2l-3 10v2.5" /><path d="M16 4h2l3 10v2.5" /><line x1={10} y1={16} x2={14} y2={16} /><circle cx={17.5} cy={16.5} r={3.5} /><circle cx={6.5} cy={16.5} r={3.5} /></svg>;
}

export default IconEyeglass2;