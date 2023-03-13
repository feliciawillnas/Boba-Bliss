import { Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {

  return (
    <div>
      <Header />
      <Container maxW="100%" as="main">
        <Outlet />
      </Container>
      <Footer />
    </div>
  )
}

export default App;
