import * as React from 'react'
import StyledBox from './styles';

interface BoxProps {
  size: string,
  border?: boolean,
  blur?: number
}

const Box: React.FC<BoxProps> = (props) => {
  const { size, border, blur } = props
  return (
  <StyledBox 
  size={size} 
  border={border} 
  blur={blur}/>
  )
};

export default Box;