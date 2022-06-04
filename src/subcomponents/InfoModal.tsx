import React from "react"
import Modal from 'react-modal';
import styled from 'styled-components'

export type Props = {
    isOpen: boolean
    onRequestClose: () => void
}

const InfoModal: React.FC<Props> = ({isOpen, onRequestClose}) => {
    Modal.setAppElement('#root');
    return (
      <StyledModal isOpen={isOpen} onRequestClose={onRequestClose}>
          <CloseButton onClick={onRequestClose}>X</CloseButton>
          <div style={{marginTop: 24}}>
              <h4>
                  Who is behind this project?
              </h4>
              <span>I am Lisa, a Ukrainian web developer from Kharkiv, who has lived in Germany for the past 16 years. </span> 
              <h4>
                  What was my motivation for this project?
              </h4>
              <span> Since the beginning of the war volunteers all over Ukraine have united and cooperated to provide help to affected people as well as to our Army. <br/><br/>
                     Regular people spend their time and money to provide help to the vulnerable and to support our Army with medicine, food and defensive weapons. Well-known funds, such as Serhiy Pritula Foundation,
                     also provide far-reaching and valuable help to everyone who needs it. <br/><br/>
                     I want to give people who don't speak Ukrainian or Russian an opportunity to get to know and to donate directly to local volunteers. Money donated to big funds as well as foreign financial help often doesn't trickle down to grassroot initiatives, so direct support is crucial.</span> 
              <h4>
                  How are charities/orgs being selected?
              </h4>
              <span>I manually select and verify them. Some of them (such as Come Back Alive) are well-established, while some have come into existence only recently. However, all of them provide reports on where the money is being spent (albeit some smaller initiatives only in Ukrainian/Russian and in their Instagram stories).</span> 
          </div>
      </StyledModal>
    )
}

const StyledModal = styled(Modal)`
    position: absolute;
    top: 50%;
    left: 50%;
    right: auto;
    bottom: auto;
    transform: translate(-50%, -50%);
    padding-top: 0;
    border: 1px solid #ccc;
    background: #fff;
    overflow: auto;
    border-radius: 4px;
    outline: none;
    padding: 20px;
    background-color: white;
    overflow-y: scroll;
    max-height: 100vh;

    @media (max-width: 768px) {
        width: 80%;
        height: 80%;
      }
`

const CloseButton = styled.div`
    width: 24px; 
    height: 24px; 
    padding: 16px; 
    padding-right: 0;
    margin-left: auto; 
    margin-right: 0;
    text-align: center; 
    cursor: pointer;
`

export default InfoModal