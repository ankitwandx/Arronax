import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import { ArronaxIcon } from '../ArronaxIcon';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 77px;
  padding: 25px 30px 0 30px;
`;

export const ToolItem = styled.div`
  height: 52px;
  border: 1px solid rgb(220, 220, 220);
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  color: rgb(74, 74, 74);
  cursor: pointer;
  position: absolute;
  top: 25px;
  z-index: 1;
  &:hover {
    border-color: rgb(180, 231, 242);
    color: rgb(86, 194, 217);
    z-index: 4;
    & > span {
      color: rgb(86, 194, 217);
    }
  }
  &:after {
    content: '';
    width: 100%;
    height: 6px;
    background: transparent;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

export const FilterTool = styled(ToolItem)<{ isactive: boolean }>`
  width: 126px;
  border-radius: 5px 0px 0px 5px;
  padding-left: 13px;
  left: 30px;
  color: ${({ isactive }) =>
    isactive ? 'rgb(86, 194, 217)' : 'rgb(74, 74, 74)'};
  & > span {
    color: ${({ isactive }) =>
      isactive ? 'rgb(86, 194, 217)' : 'rgb(74, 74, 74)'};
  }
  &:after {
    background: ${({ isactive }) =>
      isactive ? 'rgb(166, 223, 226)' : 'transparent'};
  }
`;

export const ColumnsTool = styled(ToolItem)<{ isactive: boolean }>`
  width: 153px;
  left: 155px;
  padding-left: 12px;
  color: ${({ isactive }) =>
    isactive ? 'rgb(86, 194, 217)' : 'rgb(74, 74, 74)'};
  & > span {
    color: ${({ isactive }) =>
      isactive ? 'rgb(86, 194, 217)' : 'rgb(74, 74, 74)'};
  }
  &:after {
    background: ${({ isactive }) =>
      isactive ? 'rgb(166, 223, 226)' : 'transparent'};
  }
`;

export const AggTool = styled(ToolItem)<{ isactive: boolean }>`
  width: 145px;
  padding-left: 13px;
  left: 307px;
  color: ${({ isactive }) =>
    isactive ? 'rgb(86, 194, 217)' : 'rgb(74, 74, 74)'};
  & > span {
    color: ${({ isactive }) =>
      isactive ? 'rgb(86, 194, 217)' : 'rgb(74, 74, 74)'};
  }
  &:after {
    background: ${({ isactive }) =>
      isactive ? 'rgb(166, 223, 226)' : 'transparent'};
  }
`;

export const ShareTool = styled(ToolItem)`
  width: 120px;
  left: 451px;
  padding-left: 18px;
  border-radius: 0px 5px 5px 0px;
`;

export const FilterIcon = styled(ArronaxIcon)`
  display: inline-block;
  margin-right: 11px;
`;

export const ExportIcon = styled(ArronaxIcon)`
  display: inline-block;
  margin-right: 6px;
`;

export const ColumnIcon = styled(ArronaxIcon)`
  display: inline-block;
  margin-right: 8px;
`;

export const BadgeWrapper = withStyles({
  badge: {
    top: 5,
    right: -20,
    color: '#fff',
    backgroundColor: 'rgb(86, 194, 217)',
    boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.5)',
  },
})(Badge);