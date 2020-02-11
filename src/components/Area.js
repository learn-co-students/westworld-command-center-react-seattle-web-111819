import React from 'react';
import '../stylesheets/Area.css'
import { Card } from 'semantic-ui-react'
import Host from './Host'

// Converted to a functional component to extract logic outside the return
const Area = ({area, hosts, selected, onSelect}) => {

  const showLocals = () =>
    // Filter the hosts to find the ones that are active and in this area...
    hosts.filter(host => host.active && host.area === area.name).map(local =>
      // ...then map through and build host cards for those locals
      <Host key={local.id} host={local} selected={selected} onSelect={onSelect}/>)

  return (
    <div className='area' id={area.name}>
      <h3 className='labels'>{area.title}</h3>
      {/* Pulled in the Card.Group (with import) from HotList to display the Host cards properly */}
      <Card.Group itemsPerRow={6}>
        {showLocals()}
      </Card.Group>
    </div>
  )
}

// Area.propTypes = {
//   hosts: function(props, propName, componentName){
//     if(props.hosts.length > props.limit){
//       throw Error(
//         `HEY!! You got too many hosts in ${props.name}. The limit for that area is ${props.limit}. You gotta fix that!`
//       )
//     }
//   }
// }

export default Area;
