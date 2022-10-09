import PropTypes from 'prop-types';
import { Table, TableHead } from './TransactionHistory.styled';
import { Box } from '../Commons/Box';
import { Item } from './Item/Item';

export const TransactionHistory = props => {
  const { items } = props;

  return (
    <Table>
      <TableHead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TableHead>

      <Box as="tbody">
        {items.map(item => (
          <Item key={item.id} item={item} />
        ))}
      </Box>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
