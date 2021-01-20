import * as React from 'react'
import StyledBox from './styles';

interface BoxProps {
  size: string
}

const Box: React.FC<BoxProps> = (props) => {
  const { size } = props
  return (
  <StyledBox size={size} />
  )
};

export default Box;