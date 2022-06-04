import React from "react"
import { CharityCategory } from "../types"
import styled from 'styled-components'


export type Props = {
  name: CharityCategory,
  onClick: (name: CharityCategory) => void,
  selected: boolean
}

const ChoosingCard: React.FC<Props> = ({name, onClick, selected}) => {
    return (
        <StyledChoosingCard className={`choosing-card ${selected && "selected"}`} onClick={() => onClick(name)}>
            {name}
        </StyledChoosingCard>
    )
}

const StyledChoosingCard = styled.div`
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 12px;
    padding-top: 12px;
    background-color: white;
    color: black;
    border-radius: 6px;
    border: 2px solid #484848;
    display: flex;
    justify-content: center;

    :not(:last-child) {
        margin-right: 16px
      }

    @media (max-width: 480px) {
        margin-top: 16px;
        width: auto;
        :not(:last-child) {
          margin-right: 0
      }
    }

    @media (min-width: 768px) {
        width: 100px;
    }
    &.selected {
        background-color: #484848;
        color: white;
    }

    &.selected {
        background-color: #484848;
        color: white;
      }

    &:hover {
        cursor: pointer;	
      }
`

export default ChoosingCard
