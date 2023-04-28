import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <>
      <Label>
        Find contacts by name
        <Input type="name" value={value} onChange={onChange}></Input>
      </Label>
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
