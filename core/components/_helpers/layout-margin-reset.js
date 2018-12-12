import { css } from '@auth0/cosmos/styled'

/**
 * Applies the margin reset depending on the prop value that comes
 * from the parent component.
 *
 * Layout's Items direct children has to have their margin cleared so it doesn't generate double spacings.
 * This is a fix that will last until we remove margins from components.
 */
const applyMarginReset = (propName = 'marginReset') => props => {
  const propValue = props[propName]
  const matchingValue = propValue === 'reset' ? '0 !important' : false

  if (matchingValue)
    return css`
      > * > * {
        margin: ${matchingValue};
      }

      > * > * > *:last-child {
        margin-bottom: ${matchingValue};
      }

      > * > * > *:first-child {
        margin-top: ${matchingValue};
      }
    `
  return ''
}

export default applyMarginReset
