import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'BoomerangExchange',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by BoomerangExchange), NFTs, and more, on a platform you can trust.',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('BoomerangExchange')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('BoomerangExchange')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('BoomerangExchange')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('BoomerangExchange')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('BoomerangExchange')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('BoomerangExchange')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('BoomerangExchange')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('BoomerangExchange')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('BoomerangExchange')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('BoomerangExchange')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('BoomerangExchange')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('BoomerangExchange')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('BoomerangExchange')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('BoomerangExchange')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('BoomerangExchange')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('BoomerangExchange')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('BoomerangExchange')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('BoomerangExchange')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('BoomerangExchange Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('BoomerangExchange Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('BoomerangExchange Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('BoomerangExchange')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('BoomerangExchange')}`,
      }
    case '/nfts/activity':
      return {
        title: `${t('Activity')} | ${t('BoomerangExchange')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Profile')} | ${t('BoomerangExchange')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('BoomerangExchange')}`,
      }
    default:
      return null
  }
}
