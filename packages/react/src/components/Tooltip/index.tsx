import { ComponentProps, ReactNode } from 'react'
import { TooltipContainer, TooltipTrigger, TooltipPortal, TooltipContent, TooltipArrow } from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {
    children: ReactNode
    content: ReactNode
  }

export function Tooltip({ children, content, ...props }: TooltipProps) {
    return (
            <TooltipContainer {...props}>
            <TooltipTrigger asChild>{children}</TooltipTrigger>
            <TooltipPortal>
                <TooltipContent side="top">
                    {content}
                    <TooltipArrow width={16} height={8} />
                </TooltipContent>
            </TooltipPortal>
        </TooltipContainer>
        
    )
}

Tooltip.displayName = 'Tooltip'