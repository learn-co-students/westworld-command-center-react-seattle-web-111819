import React from 'react'
import { Segment, Image } from 'semantic-ui-react'
import * as Images from '../services/Images'
import HostInfo from './HostInfo'


const Details = props => {

  // If a host is selected display HostInfo, otherwise 'selected' is null and show the splash image
  const renderSomething = () => 
    props.selected ? <HostInfo 
      {...props}
    /> : <Image size='medium' src={Images.westworldLogo}/>

  return(
    <Segment id="details" className="HQComps">
      {renderSomething()}
    </Segment>
  )
}

export default Details