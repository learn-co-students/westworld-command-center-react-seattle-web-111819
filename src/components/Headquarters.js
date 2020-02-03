import React from 'react';
import '../stylesheets/Headquarters.css';
import { Grid } from 'semantic-ui-react';
import ColdStorage from './ColdStorage'
import Details from './Details'
import LogPanel from './LogPanel'

// Converted to a functional component
const Headquarters = ({hosts, areas, logs, selected, activateAll, onSelect, onRelocate, onActivate, onActivateAll}) => {


  return (
    <Grid celled='internally'>
      <Grid.Column width={8}>
        <ColdStorage 
          hosts={hosts} 
          selected={selected}
          onSelect={onSelect}
        />
      </Grid.Column>
      <Grid.Column width={5}>
        <Details 
          areas={areas}
          selected={selected}
          onRelocate={onRelocate}
          onActivate={onActivate}
        />
      </Grid.Column>
      <Grid.Column width={3}>
        <LogPanel 
        logs={logs}
        activateAll={activateAll}
        onActivateAll={onActivateAll}
        />
      </Grid.Column>
    </Grid>
  )
}

export default Headquarters;