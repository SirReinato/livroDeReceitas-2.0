import styled from "styled-components";
import tags from "./tags.json";


const TagsConteiner = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 16px;
  margin-top: 32px;
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
  padding: 5px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 10px;
  border: 2px solid #293725;
  background: #869a81;
`;

const Tags = ({setTag}) => {
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
