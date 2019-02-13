import * as React from 'react';
import * as moment from 'moment';
import { connect } from 'react-redux';
import { getColumns, getNetwork } from '../../reducers/app/selectors';
import styled from 'styled-components';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Circle from '@material-ui/icons/FiberManualRecord';

const TableRowWrapper = styled(TableRow)`
  &&& {
    &:nth-of-type(odd) {
      background-color: #ecedef;
    }
  }
`;

const StyledCircle1 = styled(Circle)`
  color: rgb(255, 155, 213);
`;

const StyledCircle2 = styled(Circle)`
  color: rgb(215, 195, 113);
  margin-left: -4px;
  margin-right: 7px;
`;

const StyledCell = styled(TableCell)`
  &&& {
    color: #4a4a4a;
    font-size: 16px;
    font-weight: 300;
    letter-spacing: -0.55px;
    border: none;
  }
`;

const SpanContainer = styled.span`
  display: flex;
`;

const ExplorerLink = styled.a`
  text-decoration: none;
  color: #10ade4;
`;
interface Props {
  category: string;
  item: object;
  selectedColumns: any[];
  network: string;
}

export const displayType = (network, shortenedItem, item, dataIndex) => {
  if (dataIndex === 'accountId' || dataIndex === 'manager') {
    console.log(item);
    console.log(shortenedItem);
    return (
      <React.Fragment>
        <StyledCircle1 />
        <StyledCircle2 />
        <ExplorerLink
          href={`https://${network}.tzscan.io/${item[dataIndex]}`}
          target="_blank"
        >
          {shortenedItem[dataIndex]}
        </ExplorerLink>
      </React.Fragment>
    );
  } else if (
    dataIndex === 'predecessor' ||
    dataIndex === 'hash' ||
    dataIndex === 'blockId' ||
    dataIndex === 'blockHash' ||
    dataIndex === 'operationGroupHash'
  ) {
    return (
      <React.Fragment>
        <ExplorerLink
          href={`https://${network}.tzscan.io/${item[dataIndex]}`}
          target="_blank"
        >
          {shortenedItem[dataIndex]}
        </ExplorerLink>
      </React.Fragment>
    );
  } else if (
    dataIndex === 'protocol' ||
    dataIndex === 'context' ||
    dataIndex === 'operationsHash' ||
    dataIndex === 'signature'
  ) {
    return shortenedItem[dataIndex];
  } else {
    return item[dataIndex];
  }
};

const CustomTableRow: React.StatelessComponent<Props> = props => {
  const { selectedColumns, item, network } = props;
  const shortenedItem = { ...item };
  let itemsArray = Object.keys(shortenedItem);
  itemsArray.forEach(hash => {
    if (
      hash.toLowerCase().includes('hash') ||
      hash.toLowerCase().includes('predecessor') ||
      hash.toLowerCase().includes('accountid') ||
      hash.toLowerCase().includes('blockid') ||
      hash.toLowerCase().includes('manager') ||
      hash.toLowerCase().includes('protocol') ||
      hash.toLowerCase().includes('context') ||
      hash.toLowerCase().includes('signature')
    ) {
      const hashRepresentation = item[hash];
      const firstHalf = hashRepresentation.substring(0, 6);
      const secondHalf = hashRepresentation.substring(
        hashRepresentation.length - 6,
        hashRepresentation.length
      );
      const newHash = `${firstHalf}...${secondHalf}`;
      shortenedItem[hash] = newHash;
    }
    return shortenedItem[hash];
  });

  return (
    <TableRowWrapper>
      {selectedColumns.map(column => {
        return (
          <StyledCell key={column.key}>
            {column.dataIndex === 'timestamp' ? (
              moment(item[column.dataIndex]).format('dd MM YYYY h:mm:ss a')
            ) : (
              <SpanContainer>
                {displayType(network, shortenedItem, item, column.dataIndex)}
              </SpanContainer>
            )}
          </StyledCell>
        );
      })}
    </TableRowWrapper>
  );
};

const mapStateToProps = (state: any) => ({
  network: getNetwork(state),
  selectedColumns: getColumns(state),
});

export default connect(
  mapStateToProps,
  null
)(CustomTableRow);
