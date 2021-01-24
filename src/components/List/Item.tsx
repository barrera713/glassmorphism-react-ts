import React from 'react'
import { StyledListItem  } from './styles';




const Item: React.FC<{}> = (props) => {
  
  return (
    <StyledListItem {...props} />
  )
};

export default Item;