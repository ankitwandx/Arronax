import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import DialogContent from '@material-ui/core/DialogContent';
import Background from '../../assets/images/main_banner.png';

export const Container = styled.div`
  align-self: center;
  flex: 1 1 auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  text-align: center;
`;

export const ContainerNew = styled.div`
  display:flex;
  flex-direction: column;
  min-height: 100vh;
  background-image: url(${Background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
`;

export const MainContainer = styled.div`
  
`;

export const TabContainer = styled.div`
  padding: 0px 30px;
  width: 100%;
`;

export const NoResultContainer = styled.div`
  width: 100%;
  padding-top: 67px;
  display: flex;
  justify-content: center;
`;

export const OctopusImg = styled.img`
  height: 183px;
  width: 169px;
`;

export const NoResultContent = styled.div`
  margin-left: 38px;
  padding-top: 16px;
`;

export const NoResultTxt = styled.div`
  color: rgb(42, 57, 115);
  font-size: 28px;
  font-weight: 500;
  line-height: 30px;
`;

export const TryTxt = styled.div`
  color: rgb(155, 155, 155);
  font-size: 18px;
  font-weight: 500;
  line-height: 21px;
  margin-top: 8px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 24px;
`;

export const CustomButton = styled.div`
  cursor: pointer;
  border-radius: 9px;
  height: 42px;
  width: 158px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
`;

export const ClearButton = styled(CustomButton)`
  border: 2px solid rgb(0, 196, 220);
  color: rgb(0, 196, 220);
`;

export const TryButton = styled(CustomButton)`
  color: white;
  background: rgb(86, 194, 217);
  margin-left: 22px;
`;

export const DismissButton = styled(CustomButton)`
  color: white;
  background: rgb(86, 194, 217);
`;

export const DialogContentWrapper = withStyles({
  root: {
    minWidth: '350px'
  }
})(DialogContent);