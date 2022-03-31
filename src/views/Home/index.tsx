import styled from 'styled-components'
import PageSection from 'components/PageSection'
import { PageMeta } from 'components/Layout/Page'
import Hero from './components/Hero'
import Header from './components/Header'

const StyledHeroSection = styled(PageSection)`
  padding-top: 16px;
`

const Home: React.FC = () => {
  return (
    <>
      <PageMeta />
      <StyledHeroSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        background={
          "linear-gradient(to bottom right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('images/background.jpg') center center no-repeat"
        }
        index={2}
        hasCurvedDivider={false}
      >
        <Header />
        <Hero />
      </StyledHeroSection>
    </>
  )
}

export default Home
