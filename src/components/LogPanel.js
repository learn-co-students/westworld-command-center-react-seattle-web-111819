import React from 'react'
import { Segment, Button } from 'semantic-ui-react';

const LogPanel = ({logs, activateAll, onActivateAll}) => {

  const handleClick = () => onActivateAll()

  const showLogs = () => 
    logs.map((log, i) => 
      <p key={i} className={log.type}>{log.msg}</p>)

  return(
    <Segment className="HQComps" id="logPanel">
      <pre>
        {showLogs()}
      </pre>
      
      <Button
        fluid
        onClick={handleClick}
        color={activateAll ? "red" : "green"}
        content={activateAll ? "ACTIVATE ALL" : "DECOMMISSION ALL"}
      />
    </Segment>
  )
}

export default LogPanel