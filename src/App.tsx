import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components"
import { CartContextPropider } from "./contexts/CartContext";
import { Router } from "./Routes";
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/theme/default"


function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <BrowserRouter>
        <CartContextPropider>
          <Router/>
        </CartContextPropider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
