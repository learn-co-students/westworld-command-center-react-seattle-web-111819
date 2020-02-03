import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import { Log } from './services/Log'
import WestworldMap from './components/WestworldMap'
import Headquarters from './components/Headquarters'

class App extends Component {

  state = {
    areas: [],
    hosts: [],
    logs: [],
    selected: null,
    activateAll: true
  }

  componentDidMount() {
    fetch("http://localhost:4000/areas")
      .then(r => r.json())
      .then(data => this.setState({areas: data.map(area => 
        // Adds a 'title' attribute to each area with the Title Case version of the area name
        ({...area, title: area.name.split('_').map(w => w[0].toUpperCase() + w.slice(1)).join(' ')}))}))
    fetch("http://localhost:4000/hosts")
      .then(r => r.json())
      .then(data => this.setState({hosts: data}))
  }

  onSelect = clicked => 
    // Marks the clicked host as selected, or unselects them if they already were
    this.state.selected && clicked.id === this.state.selected.id ? this.setState({selected: null}) : this.setState({selected: clicked})

  onRelocate = selectedArea => {    
    let {hosts, areas, logs, selected} = this.state
    let newArea = areas.find(area => area.name === selectedArea)
    if (selectedArea === selected.area) {
      // If you clicked on the same area the host is already in, do nothing
      return
    } else if (hosts.filter(host => host.area === selectedArea).length === newArea.limit) {
      // Otherwise, if the area is full, then send an error
      this.setState(prev => ({
        logs: [Log.error(`Too many hosts! Cannot add ${selected.firstName} to ${newArea.title}!`), ...prev.logs]}))
    } else {
      // Otherwise send a notification and proceed with the relocation
      this.setState(prev => ({
        // Finds the selected host and changes the assigned area...
        hosts: prev.hosts.map(host => host.id === prev.selected.id ? {...host, area: selectedArea} : host), 
        // ...adds the log message...
        logs: [Log.notify(`${selected.firstName} set in area ${newArea.title}.`), ...prev.logs],
        // ...and updates selected
        selected: {...prev.selected, area: selectedArea}}))
    }
  }

  onActivate = () => {
    let {selected} = this.state
    this.setState(prev => ({
      // Toggles the selected host's active status...
      hosts: prev.hosts.map(host => selected.id === host.id ? {...host, active: !host.active} : host), 
      // ...adds the log message...
      logs: [selected.active ? Log.notify(`Decommissioning ${selected.firstName}.`) : Log.warn(`Activating ${selected.firstName}!`), ...prev.logs],
      // ...and updates selected
      selected: {...prev.selected, active: !prev.selected.active}}))
  }

  onActivateAll = () => {
    this.setState(prev => ({
      // Sets all hosts to active/inactive based on the activateAll status
      hosts: prev.hosts.map(host => ({...host, active: prev.activateAll})),
      // ...adds the log message...
      logs: [this.state.activateAll ? Log.warn("Activated All Hosts!") : Log.notify("Decommissioned All Hosts."), ...prev.logs],
      // ...and toggles the activateAll button status
      activateAll: !prev.activateAll}))
  }

  render(){
    let {hosts, areas, selected} = this.state
    return (
      <Segment id='app'>
        <WestworldMap 
          hosts={hosts} 
          areas={areas}
          selected={selected}
          onSelect={this.onSelect}
        />
        <Headquarters 
          // hosts={hosts} 
          // areas={areas}
          // logs={logs}
          // selected={selected}
          // activateAll={activateAll}
          {...this.state}
          onSelect={this.onSelect}
          onRelocate={this.onRelocate}
          onActivate={this.onActivate}
          onActivateAll={this.onActivateAll}
        />
      </Segment>
    )
  }
}

export default App;