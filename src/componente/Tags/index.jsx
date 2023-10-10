import { useState } from "react";
import styled from "styled-components";
import TagsCard from "./TagsCard";


const TagsConteiner = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 16px;
  margin-top: 32px;
`;

const Tags = ({tags = []}) => {
  return (
    <TagsConteiner>
        {tags.map(tag => {
            return (
                <TagsCard key={tag.id} tags={tag} />
            )
        })}
    </TagsConteiner>
  )
};

export default Tags;
