import { styled } from '../../styles'
import * as Tooltip from '@radix-ui/react-tooltip'

export const TooltipProvider = styled(Tooltip.Provider, {
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    // alignContent: 'center',
})

export const TooltipContainer = styled(Tooltip.Root)

export const TooltipTrigger = styled(Tooltip.Trigger)

export const TooltipPortal = styled(Tooltip.Portal)

export const TooltipContent = styled(Tooltip.Content, {
  padding: '$3 $4',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
  borderRadius: '$sm',
  background: '$gray900',
  color: '$white',
  fontFamily: '$default',
  fontSize: '1rem',
})

export const TooltipArrow = styled(Tooltip.Arrow, {
    fill: '$gray900',
})