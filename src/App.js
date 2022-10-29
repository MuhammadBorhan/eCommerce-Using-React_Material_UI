import { Button, Container, ThemeProvider } from "@mui/material";
import { useEffect } from "react";
import Appbar from "./components/appbar/Appbar";
import theme from "./styles/theme";

function App() {
  useEffect(() => {
    document.title = "React Material UI-Home";
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Appbar />
      </Container>
    </ThemeProvider>
  );
}

export default App;
