import { styled } from "styled-components"
import GlobalStyle from "./styles/GlobalStyles"
import Button from "./ui/Button"
import Input from "./ui/Input"
import Heading from "./ui/Heading"
import Row from "./ui/Row"


const StyledApp = styled.div`
padding: 20px;
`

const App = () => {
  return (
    <>
    
    <GlobalStyle />
    <StyledApp>
    <Row >
      <Row type="horizontal">
    <Heading as="h1">The Wild Oasis</Heading>
    <div>
    <Heading as="h2">Check in and out</Heading>
    <Button 
    onClick={() => alert('checkin')}
    >Check in</Button>
    <Button 
    onClick={() => alert('checkout')}
    variation="secondary"
    size="small"
    >Check out</Button>
    </div>
    </Row>
    <Row>
    <Heading as="h3">Form</Heading>
    <form>
    <Input type="text" placeholder="Name" />
    <Input type="number" placeholder="Number of nights" />
    </form>
    </Row>
    </Row>
  </StyledApp>
  </>
  );
}

export default App