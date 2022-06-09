import React, {useState, useRef, useEffect} from "react"
import styled, { createGlobalStyle } from 'styled-components'
import Flag from './assets/flag.png';
import ChoosingCard from "./subcomponents/ChoosingCard";

import InfoModal from "./subcomponents/InfoModal";
import { Charity, CharityCategory } from "./types";
import { getRandomCharity } from "./util/util";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Futura;
    background-color: #F5F5F5;
  }

  a {
    color: white;
  }
`


const CharityPage: React.FC = () => {
  const CATEGORIES = [CharityCategory.animals, CharityCategory.military, CharityCategory.humanitarian, CharityCategory.mixed]
  const [result, setResult] = useState<null | Charity>(null) 
  const [modalIsOpen, setIsOpen] = useState<boolean>(false)

  const resultComp = useRef(null)

  const handleSelect = async (name: CharityCategory) => {
    const newResult = await getRandomCharity(name, result?.name)
    setResult(newResult)
  }

  const handleRefresh = () => {
    const suggestedCategory = CATEGORIES[Math.floor(Math.random()*CATEGORIES.length)]

    handleSelect(suggestedCategory)
  }

  const toggleModal = () => {
    setIsOpen(!modalIsOpen)
  }

  useEffect(() => {
    if (resultComp.current) {
      resultComp?.current?.scrollIntoView({ behavior: 'smooth' })  
    }
}, [result]);

    return (
      <>
        <GlobalStyle />
        <Parent>
        <Container>
          <InfoModal isOpen={modalIsOpen} onRequestClose={toggleModal}/>
          <Logo>
            <Title dangerouslySetInnerHTML={{__html: 'Help <span style="font-weight: bold;">local volunteers</span> in Ukraine'}} />
          </Logo>
          <Description>
            Every day a wide variety of Ukrainian grassroots volunteers and established charity funds tirelessly help civilians, army, children and animals.
            They run on donation basis and -- I know you've heard it before, but it's true! -- even the price of a cup of coffee makes a difference.
            All listed causes are manually picked and provide reports on their spendings (sometimes just in form of Instagram stories in Ukrainian tho!), however you are welcome to conduct your own research before donating.
          </Description>
          <Content>
            <div style={{width: "100%"}}>
              <h4 style={{ textAlign: 'center'}}>Choose where to donate</h4>
              <CardContainer>
                <ChoosingCard name={CharityCategory.animals} onClick={handleSelect} selected={result?.category === CharityCategory.animals}/>
                <ChoosingCard name={CharityCategory.military} onClick={handleSelect} selected={result?.category === CharityCategory.military}/>
                <ChoosingCard name={CharityCategory.humanitarian} onClick={handleSelect} selected={result?.category === CharityCategory.humanitarian}/>
                <ChoosingCard name={CharityCategory.mixed} onClick={handleSelect} selected={result?.category === CharityCategory.mixed}/>
              </CardContainer> 
            </div>
            {result && (
              <ResultContainer ref={resultComp}>
                <h4 style={{margin: 0}}>💙💛 Consider donating here</h4>
                <ResultRow>ℹ️ {result.name}</ResultRow>
                <ResultRow>❓ {result.description}</ResultRow>
                <ResultRow>💡 <a href={result.link}> Learn more</a></ResultRow>
                {result.payment_link ? <ResultRow>💵 <a href={result.payment_link}> Donate here</a></ResultRow> : <ResultRow>{`💵 Paypal: ${result.paypal_address}`}</ResultRow>}
                <RefreshLink onClick={handleRefresh}>Pick a new one</RefreshLink>
              </ResultContainer>
              )}
          </Content>
          <FooterContainer>
            <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" target='_blank' className="twitter-share-button" style={{color: 'black', textAlign: 'center'}} data-size="large" data-text="I just donated to help local volunteers in Ukraine. Do the same at ukrainevolunteers.help" data-show-count="false">Tweet about your donation</a><script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
            <span style={{marginLeft: 16, textAlign: 'center', textDecoration: 'underline', cursor: "pointer"}} onClick={toggleModal}>Read more about the project</span>
          </FooterContainer>
        </Container>
      </Parent>
    </>

    )
}

const Parent = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 50%;
  padding: 48px;
  padding-top: 0;

  @media (max-width: 768px) {
    width: 100%;
    padding: 32px;
    padding-top: 0;
  }
`

const Logo = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px;

  @media (min-width: 1440px) {
    padding: 48px;
  }

  &:after {
    content: "";
    background-image: url(${Flag});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.6;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;   
`

const Title = styled.div`
  font-size: 32px;
  text-align: center;
  max-width: 200px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`

const Description = styled.p`
  text-align: center;
  line-height: 1.5;
  color: #4A4A4A;
`

const Content = styled.div`
  display: flex;
  background-color: white;
  flex-direction: column;
  margin-top: 32px;
  padding: 16px;

  @media (min-width: 768px) {
    align-items: center;
  }
`

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 32px;

  @media (max-width: 480px) {
    flex-wrap: wrap;
    flex-direction: column;
    width: 100%;
  }
`

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 48px;
  background-color: #484848;
  color: white;
  padding: 16px;
  width: 90%;
`

const ResultRow = styled.span`
  margin-top: 16px;
`

const RefreshLink = styled.span`
  margin-top: 16px;
  cursor: pointer;	
  text-decoration: underline;
`

const FooterContainer = styled.div`
  margin-top: auto;
  padding: 16px; 
  display: flex; 
  justify-content: center; 
  width: 100%;
`

export default CharityPage

