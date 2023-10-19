import styled from "styled-components";

const InputConteiner = styled.div`
  width: 336.685px;
  display: flex;
  justify-content: space-between;
  gap: 16px;
`;

const Input = styled.input`
  width: 218.696px;
  height: 50px;
  flex-shrink: 0;
  border: 3px solid #f1c376;
  background: none;
  &::placeholder {
    color: #f1c376;
    font-family: Jacques Francois;
    font-size: 16px;
    padding: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px; /* 222.222% */
    text-transform: capitalize;
  }
`;

const BtnInput = styled.button`
  width: 110px;
  height: 51px;
  display: inline-flex;
  padding: 28px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: none;
  background: #f1c376;

  color: #606c5d;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const InputNovidades = () => {
  return (
    <InputConteiner>
      <Input type="text" placeholder="Seu Email" />
      <BtnInput type="submit">Assinar</BtnInput>
    </InputConteiner>
  );
};

export default InputNovidades;
