import {
  MenuItemsType,
  DropdownMenuItemType,
  SwapIcon,
  SwapFillIcon,
  EarnFillIcon,
  EarnIcon,
  TrophyIcon,
  TrophyFillIcon,
  NftIcon,
  NftFillIcon,
  MoreIcon,
} from '@boomerangexchange/uikit'
import { ContextApi } from 'contexts/Localization/types'
import { nftsBaseUrl } from 'views/Nft/market/constants'
import { perpLangMap } from 'utils/getPerpetualLanguageCode'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t'], languageCode?: string) => ConfigMenuItemsType[] = (t, languageCode) => [
  {
    label: t('Exchange'),
    icon: SwapIcon,
    fillIcon: SwapFillIcon,
    href: '/swap',
    showItemsOnMobile: false,
    items: [],
  },
  {
    label: t('Farms'),
    href: '/farms',
    icon: EarnIcon,
    fillIcon: EarnFillIcon,
    items: [],
  },
  {
    label: t('Pools'),
    href: '/pools',
    icon: EarnIcon,
    fillIcon: EarnFillIcon,
    items: [],
  },
  {
    label: t('Presale'),
    href: '/presale',
    icon: EarnIcon,
    fillIcon: EarnFillIcon,
    items: [],
  },
  {
    label: t('NFT'),
    href: `${nftsBaseUrl}`,
    icon: NftIcon,
    fillIcon: NftFillIcon,
    items: [
      {
        label: t('Overview'),
        href: `${nftsBaseUrl}`,
      },
      {
        label: t('Collections'),
        href: `${nftsBaseUrl}/collections`,
      },
      {
        label: t('Activity'),
        href: `${nftsBaseUrl}/activity`,
      },
    ],
  },
  {
    label: t('Information'),
    href: '/info',
    icon: MoreIcon,
    hideSubNav: true,
    items: [
      {
        label: t('Info'),
        href: '/info',
      },
      {
        label: t('IFO'),
        href: '/ifo',
      },
      {
        label: t('Voting'),
        href: '/voting',
      },
      {
        type: DropdownMenuItemType.DIVIDER,
      },
      {
        label: t('Leaderboard'),
        href: '/teams',
      },
      {
        type: DropdownMenuItemType.DIVIDER,
      },
      {
        label: t('Blog'),
        href: 'https://medium.com/pancakeswap',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: t('Docs'),
        href: 'https://docs.pancakeswap.finance',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
    ],
  },
]

export default config
