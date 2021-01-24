import React from 'react'
import { StyledList  } from './styles';
import Item from './Item';


interface ListProps {
  items?: any[];
  size?: 'sm' | 'lg'
}


const List: React.FC<ListProps> = (props) => {
  
  return (
    <StyledList {...props}>
      {props.items?.map(item => (
        <Item {...props}>
          <p>{item}</p>
        </Item>
      ))}
    </StyledList>
  )
};

export default List;