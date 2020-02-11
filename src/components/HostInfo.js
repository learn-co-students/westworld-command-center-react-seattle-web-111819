import '../stylesheets/HostInfo.css'
import React from 'react'
import { Radio, Icon, Card, Grid, Image, Dropdown, Divider } from 'semantic-ui-react'

// Converted to a stateless functional component
const HostInfo = ({selected, areas, onRelocate, onActivate}) => {

  const handleActivate = () => onActivate()
  const handleRelocate = (_e, {value}) => onRelocate(value)

  const showDropdown = () => 
    <Dropdown
      onChange={handleRelocate}
      value={selected.area}
      options={areas.map(area => ({key: area.name, text: area.title, value: area.name}))}
      selection
    />

  return (
    <Grid>
      <Grid.Column width={6}>
        <Image
          src={selected.imageUrl}
          floated='left'
          size='small'
          className="hostImg"
        />
      </Grid.Column>
      <Grid.Column width={10}>
        <Card>
          <Card.Content>
            <Card.Header>
              {selected.firstName} | {selected.gender === "Male" ? <Icon name='man' /> : <Icon name='woman'/>}
            </Card.Header>
            <Card.Meta>
              <Radio
                onChange={handleActivate}
                label={selected.active ? "Active" : "Decommissioned"}
                checked={selected.active}
                slider
              />
            </Card.Meta>
            <Divider />
            Current Area:
            {showDropdown()}
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  )
}

export default HostInfo