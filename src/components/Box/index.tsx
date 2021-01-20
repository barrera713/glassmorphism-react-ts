import * as React from 'react'

interface BoxProps {
  size: string
}

const Box: React.FC<BoxProps> = ({size}) => {
  return (
  <div 
  className={size}>
    <p>HELLO</p>
  </div>
  )
};

export default Box;