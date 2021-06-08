import { decorateData } from '@mojule/dom'

export const headerEls = ( ...els: HTMLElement[] ) =>
  decorateData(
    { target: 'header' },
    ...els
  )

export const footerEls = ( ...els: HTMLElement[] ) =>
  decorateData(
    { target: 'footer' },
    ...els
  )
