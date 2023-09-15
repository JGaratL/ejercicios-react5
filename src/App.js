import React from 'react';
import Grid from './components/Grid';
import StyledButton from './components/StyledButton ';
function App() {
  return (
    <Grid>
      <StyledButton variant="default" onClick={() => alert('Botón Default presionado')}>Default</StyledButton>
      <StyledButton variant="success" onClick={() => alert('Botón Success presionado')}>Success</StyledButton>
      <StyledButton variant="error" onClick={() => alert('Botón Error presionado')}>Error</StyledButton>
      <StyledButton variant="warning" onClick={() => alert('Botón Warning presionado')}>Warning</StyledButton>
      <StyledButton variant="info" onClick={() => alert('Botón Info presionado')}>Info</StyledButton>
    </Grid>
  );
}


export default App;
