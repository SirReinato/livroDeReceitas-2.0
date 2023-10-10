import styled from "styled-components";
import { HiSearchCircle } from "react-icons/hi";

const InputConteiner = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  margin-top: 20px;
  border: 4px solid #293725;
`;

const Input = styled.input`
  color: #293725;
  font-family: Koh Santepheap;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: none;
  border: none;
`;

const Seach = () => {
  return (
    <InputConteiner>
      <Input type="text" placeholder="Procurar..." />
    </InputConteiner>
  );
};

export default Seach;
