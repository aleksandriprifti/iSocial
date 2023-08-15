import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react';

interface Props {
    //darken the background
    inverted?: boolean;
    content?: string;
}

const LoadingComponent = ({inverted= true, content='Loaded...'}: Props) => {
  return (
    <Dimmer active={true} inverted={inverted} ><Loader content={content}/></Dimmer>
  )
}

export default LoadingComponent