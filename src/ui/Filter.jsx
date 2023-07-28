import { useSearchParams } from 'react-router-dom';
import styled, { css } from 'styled-components';


const StyledFilter = styled.div`
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
`;
 
const FilterButton = styled.button`
  background-color: var(--color-grey-0);
  border: none;
 
  ${(props) =>
    props.active.toString() === 'true' && //changed this line
    css`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
    `}
 
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  /* To give the same height as select */
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;
 
  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;
 
function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
 
  const currentFilter = searchParams.get(filterField) || options[0].value;
 
  function handleClick(value) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }
 
  return (
    <StyledFilter>
      {options.map((o) => (
        <FilterButton
          key={o.value}
          onClick={() => handleClick(o.value)}
          active={o.value === currentFilter ? 'true' : 'false'} // and changed this line
          disabled={o.value === currentFilter}>
          {o.label}
        </FilterButton>
      ))}
    </StyledFilter>
  );
}

import PropTypes from 'prop-types';

// ...

Filter.propTypes = {
  filterField: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  })).isRequired,
};


 
export default Filter;