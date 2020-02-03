import React from 'react'
import { Card } from 'semantic-ui-react'
import Host from './Host'

const HostList = ({hosts, selected, onSelect}) => {

  // Filter to show only inactive hosts with key
  const showHosts = () => hosts.filter(host => !host.active).map(host => 
    <Host key={host.id} host={host} selected={selected} onSelect={onSelect} />)

  return(
    <Card.Group itemsPerRow={6}>
      {showHosts()}
    </Card.Group>
  )
}

export default HostList