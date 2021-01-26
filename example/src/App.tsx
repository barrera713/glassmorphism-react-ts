import React from 'react'

import { Box, Divider, Button, List } from 'glassmorphism-react-ts'
import 'glassmorphism-react-ts/dist/index.css'

const App = () => {

  const mockData = ['Apple', 'Banana', 'Pear', 'Carrot'];

  return (
    <div className="dev-background">
      <h5>Glassmorphism</h5>
      <div className='component-ctn'>
        <Box size='sm' blur={5} />
        <Divider />
        <Button size='sm'>Small</Button>
        <Divider />
        <Button>Normal</Button>
        <Divider />
        <Button size='lg'>Large</Button>
        <Divider />
        <List items={mockData} height='sm'/>
      </div>
    </div>
  )
};

export default App
