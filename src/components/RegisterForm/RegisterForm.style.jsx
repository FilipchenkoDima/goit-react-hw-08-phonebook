import { TextField } from '@mui/material';
import styled from 'styled-components';

export const FormWrapper = styled.form`
  display: flex;
  padding: 26px;
  width: 450px;
  flex-direction: column;
  align-items: center;
  border-radius: 24px;
  background-color: #f6fbf9;
  font-family: 'Karla';
  gap: 12px;
  margin: 10% auto;
`;

export const FormInput = styled(TextField)`
  width: 300px;
  background-color: #ffffff;
`;

export const FormTitle = styled.h2`
  color: #212b27;
  margin: 0px;
  font-size: 32px;
  line-height: 1.3;
`;

export const FormInfo = styled.p`
  margin: 0;
  color: #32403b;
  width: 260px;
  font-size: 13px;
  line-height: 1.30;
  text-align: center;
`;

export const FormBtn = styled.button`
  display: block;
  background-color: #84c7ae;
  color: #ffffff;
  border: none;
  width: 130px;
  height: 34px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
  :hover {
    background-color: #84c7a4;;
  }
`;
