import React from 'react';
import styles from './App.module.scss';
import FlatFertileButton, { FlatAutoButton } from '../FlatFertileButton/FlatFertileButton';
const App: React.FC = () => (
  <div className={styles.App} data-testid="App">
    {/* flat button */}
    <FlatFertileButton onClick={e => console.log(e)} backgroundColor="tomato">
      I <img src='/logo192.png' style={{ height: '32px', width: '32px' }} alt="logo react" />
        React</FlatFertileButton>
    <FlatFertileButton backgroundColor="tomato"><div style={{ fontSize: '8pt', fontWeight: 400 }}>suppr</div></FlatFertileButton>
    <FlatFertileButton onClick={e => console.log(e)} backgroundColor="grey">FlatFdrtileButton</FlatFertileButton>
    <FlatFertileButton onClick={e => console.log(e)} backgroundColor="skyblue">
      I <img src='/3D_heart.png' style={{ height: '32px', width: '32px' }} alt="heart" />
        Js/Ts </FlatFertileButton>
    {/* auto flat button */}
    <FlatAutoButton type="again" onClick={e => { }} />
    <FlatAutoButton type="ok" onClick={e => { }} />
    <FlatAutoButton type="cancel" onClick={e => { }} />
    <hr />
  </div>
);

export default App;
