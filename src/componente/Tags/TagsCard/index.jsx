import styled from "styled-components";

const TagsCardCard = styled.button`
  color: #293725;
  font-family: Koh Santepheap;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;

  display: flex;
  padding: 5px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 10px;
  border: 2px solid #293725;
  background: #869a81;
`;

const TagsCard = ({tags}) => {
  return (
    <TagsCardCard>
      {tags.nome}
    </TagsCardCard>
  );
};

export default TagsCard;
