import React from 'react'

import { Box  } from 'glassmorphism-react-ts'
import 'glassmorphism-react-ts/dist/index.css'

const App = () => {

  // const mockData = ['Apple', 'Banana', 'Pear', 'Carrot'];

  return (
    <div className="dev-background">
      <h5>Glassmorphism</h5>
      <div className='component-ctn'>
        <Box size='m' blur={2}>
          <h3 style={{color: "orange"}}>Hello from glass box!</h3>
        </Box>
        {/* <Divider />
        <Button size='sm'>Small</Button>
        <Divider />
        <Button>Normal</Button>
        <Divider />
        <Button size='lg'>Large</Button>
        <Divider /> */}
        {/* <List items={mockData} height='sm'/> */}
      </div>
    </div>
  )
};

export default App
