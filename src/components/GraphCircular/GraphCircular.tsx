import React from 'react';
import styles from './GraphCircular.module.scss';

const theme = ["skyblue", "skyblue", "yellowgreen", "orange", "tomato", "red"]
const GraphCircular: React.FC = (
  props: {
    value: number, max?: number, withGrid: boolean,
    height?: string, width?: string, display?: "inline" | "block",
    onHover?: Function, onClick?: Function
  }
) => {
  const rayon1 = 70;//, rayon2 = 20;
  const stepsPerRevolution = 256;
  let points: Array<{ x: number, y: number }> = [];
  let startAlpha = -Math.PI;
  let alpha = startAlpha;
  let pointStr = "";

  const color = getColorOf(props.value)
  while (alpha - startAlpha < (Math.PI * 2) && alpha - startAlpha < (alphaStepValuesRatio() * props.value)) {
    points.push({ x: Math.cos(alpha) * rayon1, y: Math.sin(alpha) * rayon1 });
    if (pointStr.length > 1) pointStr += " ";
    pointStr += "" + (Math.cos(alpha) * rayon1) + "," + (Math.sin(alpha) * rayon1);
    alpha += 2 * Math.PI / stepsPerRevolution;
  };
  function onclick(evt: React.MouseEvent<SVGElement,MouseEvent>) {
    if(undefined!==props.onClick ){
      props.onClick(evt);
    }
  }
  function onmouseover(evt: React.MouseEvent<SVGPolygonElement,MouseEvent>) {
    if(undefined!==props.onHover ){
      props.onHover(evt);
    }
    return evt;
  }
  return (
    <svg className={styles.GraphCircular} data-testid="GraphCircular"
      height={props.height} width={props.width} display={props.display}
      viewBox="-110 -110 220 220" version="1.1" onClick={onclick}>
      {props.withGrid ? <polyline points="-100,0 100,0" stroke="black" /> : ""}
      {props.withGrid ? <polyline points="0,-100 0,100" stroke="black" /> : ""}
      <text x="0" textAnchor="middle" alignmentBaseline="middle" y="0" fontSize="45" >{props.value}</text>
      <circle cx="0" cy="0" r="55" strokeWidth="3" stroke="lightgrey" fill="none" />
      <circle cx="0" cy="0" r="80" strokeWidth="3" stroke="lightgrey" fill="none" />
      <polyline points={pointStr} stroke={color} strokeWidth="50" fill="none" className={styles.bar} onMouseOver={onmouseover} />
    </svg>
  );
  function getColorOf(params: number): string {
    const colorStep = theme.length / (props.max !== undefined && props.max > props.value ? props.max : 100);
    const step = params * colorStep;
    return theme[step.toFixed()];
  }
  function alphaStepValuesRatio() {
    return 2 * Math.PI / (props.max !== undefined && props.max > props.value ? props.max : 100);
  }
};
GraphCircular.defaultProps = {
  value: 99,//[20,25,35,10,5,5],
  height: "200px",
  width: "250px",
  display: "inline"
};
export default GraphCircular;
