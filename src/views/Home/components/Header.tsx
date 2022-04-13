import styled from 'styled-components'
import { Flex, Heading, Text } from '@boomerangexchange/uikit'
import { useTranslation } from 'contexts/Localization'
import ConnectWalletButton from 'components/ConnectWalletButton'
import { useWeb3React } from '@web3-react/core'

const Wrapper = styled(Flex)`
  z-index: 1;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

const Header = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()

  return (
    <>
      <Wrapper>
        <Heading mb="24px" textAlign="center" scale="xxl" color="white" width="600px">
          {t('DECENTRALIZED EXCHANGE')}
        </Heading>
        <Text textAlign="center" color="white" fontSize="22px" width="800px">
          {t('A Binance Smart Chain decentralized exchange powered by it\'s native $BOEX token, buy and sell, farm, and join pools.')}
        </Text>
        {!account && <ConnectWalletButton mt="24px" mb="24px" />}
      </Wrapper>
    </>
  )
}

export default Header
