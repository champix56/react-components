import React from 'react';
import styles from './FlatFertileButton.module.scss';

const FlatFertileButton: React.FC = (props: { children: [] | string, color: string, backgroundColor: string, fontWeight: number, onClick: Function }) => {
  return (
    <div className={styles.FlatFertileButton} data-testid="FlatFertileButton"
      style={{ border: '1px solid ' + props.backgroundColor, backgroundColor: '' + props.color }}
      onClick={e => {
        let tgt = e.currentTarget;
        tgt.classList.add(styles.clicked)
        setTimeout(() => { tgt.classList.remove(styles.clicked) }, 250)
        props.onClick && props.onClick(e);
      }}
    >
      <div className={styles.content}
        style={{ color: props.color, backgroundColor: props.backgroundColor, fontWeight: props.fontWeight }}
      >
        {
          Array.isArray(props.children) ?
            props.children.map(e => e)
            :
            props.children
        }
      </div>
    </div>
  );
}

FlatFertileButton.defaultProps = {
  color: 'WHITE',
  backgroundColor: 'skyblue',
  fontWeight: 900
}

export default FlatFertileButton;

export interface IAppProps {
  type:"ok"|"cancel"|"again",
  onClick:Function 
}

export function FlatAutoButton (props: IAppProps) {
  let text="";
  let bgcolor="skyblue";
  
  switch(props.type){
    case 'ok':
      text="Ok";
      bgcolor="yellowgreen";
      break;
    case 'cancel':text="Annuler";
    bgcolor="tomato";
    
    break;
    case 'again':text="Encore...";
    bgcolor="silver";
    
    break;
  }
  return (
   <FlatFertileButton backgroundColor={bgcolor} onClick={props.onClick}>
     {
       text
     }
   </FlatFertileButton>
  );
}
