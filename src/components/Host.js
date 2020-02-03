import React from 'react';
import '../stylesheets/Host.css'
import { Card } from 'semantic-ui-react'

const Host = ({host, selected, onSelect}) => {

  const handleClick = () => onSelect(host)

  return(
    <Card
      // If selected is not null and if this host is the selected one, then add "selected" class
      className={"host" + (selected && host.id === selected.id ? " selected" : "")}
      onClick={handleClick}
      image={host.imageUrl}
      raised
    />
  )
}

export default Host
