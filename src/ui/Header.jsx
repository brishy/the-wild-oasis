import { styled } from "styled-components"

const StyledHeader = styled.header`
    background-color: var(--color-grey-0);
    padding: 1.2rem 4.8rem;
    border-bottom: 1px solid #f3f4f6;
`
const Header = () => {
  return (
    <StyledHeader>Header</StyledHeader>
  )
}

export default Header