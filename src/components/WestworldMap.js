import React from 'react';
import { Segment } from 'semantic-ui-react';
import Area from './Area'

const WestworldMap = ({hosts, areas, selected, onSelect}) => {

  const showAreas = () => areas.map(area => <Area key={area.id} hosts={hosts} area={area} selected={selected} onSelect={onSelect}/>)

  return (
    <Segment id="map" >
      {showAreas()}
    </Segment>
  )
}

export default WestworldMap