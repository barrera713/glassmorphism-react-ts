import React from 'react'
import { StyledList  } from './styles';
import Item from './Item';


interface ListProps {
  items?: any[];
  height?: 'sm' | 'lg';
  textAlign?: 'left' | 'center' | 'right';
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