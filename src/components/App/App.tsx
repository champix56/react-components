import React from 'react';
import styles from './App.module.scss';
import FlatFertileButton, { FlatAutoButton } from '../FlatFertileButton/FlatFertileButton';
import GraphCircular from '../GraphCircular/GraphCircular';
import GraphCloudPoint from '../GraphCloudPoint/GraphCloudPoint';
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
    <GraphCircular value={15}/>
    <GraphCircular value={25}/>
    <GraphCircular value={55}/>
    <GraphCircular value={85}/>
    <hr />
    <GraphCloudPoint/>
    <GraphCloudPoint values={[ 20, 80, 19, 63, 80, 99, 56, 8, 49, 19, 21, 69, 56, 12, 23, 25, 10, 80, 25, 56, 2]} max="150"/>
    <hr />
  </div>
);

export default App;
