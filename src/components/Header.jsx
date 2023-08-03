import React from 'react'
import {AppBar, Toolbar, styled} from '@mui/material';

const Container = styled(AppBar)`
      background : #060606;
      height : 9vh;
`      
const Header = () => {
    const logo = 'https://shots.codepen.io/username/pen/WWLOpb-800.jpg?version=1556227146';
  return (
    
      <Container position="static">
        <Toolbar>
         <img src ={logo} alt="logo" style={{width:100} } />
        </Toolbar>
      </Container>
    
  )
}

export default Header

