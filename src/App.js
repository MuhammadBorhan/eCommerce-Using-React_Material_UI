import { Button, Container, ThemeProvider } from "@mui/material";
import { useEffect } from "react";
import Appbar from "./components/appbar/Appbar";
import { MuiImageList } from "./components/MUIImageList/MuiImageList";
import theme from "./styles/theme";

function App() {
  useEffect(() => {
    document.title = "React Material UI-Home";
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Appbar />
        <MuiImageList />
      </Container>
    </ThemeProvider>
  );
}

export default App;
