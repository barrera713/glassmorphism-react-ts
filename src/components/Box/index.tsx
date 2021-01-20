import * as React from 'react'
import StyledBox from './styles';

interface BoxProps {
  size?: 'sm' | 'm' | 'lg',
  border?: boolean,
  blur?: number,
}

const Box: React.FC<BoxProps> = (props) => {
  return (
  <StyledBox 
   {...props}
  />
  )
};

export default Box;