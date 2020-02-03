import React from 'react';
import { Segment } from 'semantic-ui-react'
import HostList from './HostList'

const ColdStorage = ({hosts, selected, onSelect}) => (
  <Segment.Group className="HQComps">
    <Segment compact>
      <h3 className="labels">ColdStorage</h3>
    </Segment>
    <Segment compact>
      <HostList hosts={hosts} selected={selected} onSelect={onSelect}/>
    </Segment>
  </Segment.Group>
)

export default ColdStorage