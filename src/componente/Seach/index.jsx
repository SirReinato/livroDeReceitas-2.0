import styled from "styled-components";

const InputConteiner = styled.div`
  display: flex;
  padding: 20px 10px 20px 20px;
  justify-content: center;
  align-items: center;
  gap: 137px;
  border-radius: 10px;
  border: 4px solid #293725;
`;

const Input = styled.input`
  color: #293725;
  font-family: Koh Santepheap;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Seach = () => {
  return (
    <InputConteiner>
      <Input type="text" placeholder="Procurar..."/>
    </InputConteiner>
  );
};

export default Seach;
