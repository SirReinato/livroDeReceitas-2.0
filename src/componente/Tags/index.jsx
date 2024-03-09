import styled from "styled-components";
import tags from "./tags.json";


const TagsConteiner = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 32px;
  @media (max-width: 430px){
    justify-content: start;
    margin-top: 16px;
  }
`;

const TagsCardCard = styled.button`
  color: #293725;
  font-family: Koh Santepheap;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;

  display: flex;
  padding: 4px 6px;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  border: 2px solid #293725;
  background: #869a81;
  @media (max-width: 430px){
    font-size: 12px;
  }
`;

const Tags = ({ setTag }) => {
  return (
    <TagsConteiner>
      {tags.map(tag => {
        return (
          <TagsCardCard
            key={tag.id}
            onClick={() => setTag(tag.tag)}
          >
            {tag.nome}
          </TagsCardCard>
        )
      })}
    </TagsConteiner>
  )
};

export default Tags;
