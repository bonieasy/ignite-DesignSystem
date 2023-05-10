import { ToastContainer, ToastDescription, ToastTitle, ToastClose, ToastViewport, } from './styles'
  import { ComponentProps } from 'react'
  import { X } from 'phosphor-react'
  
  export interface ToastProps extends ComponentProps<typeof ToastContainer> {
    title: string
    content: string
    // open: boolean
    // setOpen: (open: boolean) => void
  }
  
  export function Toast({ title, content, ...props }: ToastProps) {
    return (
      <>
        <ToastContainer {...props}>
          <div>
            <ToastTitle>{title}</ToastTitle>
            <ToastDescription>{content}</ToastDescription>
          </div>
          <ToastClose asChild>
            <X />
          </ToastClose>
        </ToastContainer>
        <ToastViewport />
      </>
    )
  }
  
  Toast.displayName = 'Toast'