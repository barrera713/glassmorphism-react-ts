import React  from 'react'
import { StyledListItem, StyledList } from './styles';


interface ListProps {
  size?: 'sm' | 'lg'
}

const List: React.FC<ListProps> = (props) => {
  
  return (
    <StyledList>
      <StyledListItem {...props}>

      </StyledListItem>
    </StyledList>
  )
};

export default List;