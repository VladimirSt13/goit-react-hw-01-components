import PropTypes from 'prop-types';
import { ItemRow } from './Item.styled';

export const Item = props => {
  const { item } = props;
  const { type, amount, currency } = item;
  return (
    <ItemRow>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </ItemRow>
  );
};

Item.prototype = {
  item: PropTypes.exact({
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};
