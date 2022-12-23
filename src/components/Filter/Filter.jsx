import { FilterLabel, FilterInput } from './Filter.styled';

export const Filter = () => {
  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput type="text" />
    </FilterLabel>
  );
};
