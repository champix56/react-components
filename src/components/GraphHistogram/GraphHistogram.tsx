import React from 'react';
import styles from './GraphHistogram.module.scss';

const GraphHistogram: React.FC = (props: {
  values: [number], max?: number,
  height?: string, width?: string, display?: "inline" | "block"
  whithGrid?: boolean, gridDivisionCount: number, notAllreadyFull?: boolean
}) => {
  let maxval = 0;
  if (!props.max) {
    props.values.forEach(e => {
      maxval = (e > maxval ? e : maxval)
    });
  }
  else {
    maxval = props.max;
  }
  const hrate = 100 / (props.max ? props.max : maxval);
  const wrate = 230 / props.values.length - (props.notAllreadyFull ? 1 : 0);

  const gridrate = 100 / (props.gridDivisionCount ? props.gridDivisionCount : 5);
  const grid = new Array<{ y: number, value: string }>();
  for (let index = 100.0 - gridrate, y = 1; index >= 0; index -= gridrate, y++) {
    const t = { y: index, value: '' + maxval * (y / (props.gridDivisionCount ? props.gridDivisionCount : 5)) }
    grid.push(t);

  }
  return (
    <svg viewBox="-30 -20 270 130" className={styles.GraphHistogramme} data-testid="GraphHistogramme"
      height={props.height} width={props.width} display={props.display}
    >
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5"
          markerWidth="6" markerHeight="6"
          orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" />
        </marker>
      </defs>
      {
        grid.map((e, i) => {
          return (<>
            <line y1={e.y} x1="0" x2="230" y2={e.y} className={styles.grid} key={'lh' + i} />
            <text alignmentBaseline="middle" textAnchor="end" x="-2" y={e.y} className={styles.legendValue} key={'th' + i}>{e.value}</text>
          </>)
        })
      }
      {props.values.flatMap((e, i) => {
        return (
          <rect key={"r" + i} className={styles.bar} x={i * wrate + 2} y={100 - e * hrate} width={wrate - 5} height={e * hrate} fill="tomato" />
        );
      })}
      <polyline points="0,-5 0,100 230,100" fill="none" stroke="black"
        markerStart="url(#arrow)" markerEnd="url(#arrow)" />
    </svg>);
}
GraphHistogram.defaultProps = {
  values: [10, 20, 50, 75, 100, 20, 25, 56, 25, 32, 89, 7, 89, 42, 1, 23],
  display:"inline",
  width:'48vw'
}
export default GraphHistogram;
