import React from 'react'
import styled from '@auth0/cosmos/styled'
import PropTypes from 'prop-types'
import Automation from '../../_helpers/automation-attribute'
import transformChildren from '../../_helpers/transform-layout-children'
import applyMarginReset from '../../_helpers/layout-margin-reset'
import { spacing } from '@auth0/cosmos-tokens'

const gutterOptions = {
  none: 'var(--RowLayout--None--GridGap)',
  condensed: 'var(--RowLayout--Condensed--GridGap)',
  default: 'var(--RowLayout--Default--GridGap)',
  spacious: 'var(--RowLayout--Spacious--GridGap)'
}

const RowLayout = props => (
  <RowLayout.Element {...Automation('row-layout')} {...props}>
    {transformChildren(props, RowLayout.Item, 'row-layout.item')}
  </RowLayout.Element>
)

RowLayout.Element = styled.div`
  --RowLayout--None--GridGap: 0;
  --RowLayout--Condensed--GridGap: ${spacing.small};
  --RowLayout--Default--GridGap: ${spacing.medium};
  --RowLayout--Spacious--GridGap: ${spacing.xlarge};

  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${props => gutterOptions[props.gutter]};

  ${applyMarginReset()};
`
RowLayout.Item = styled.div``

RowLayout.propTypes = {
  /** Regulates the size of the gutter between rows*/
  gutter: PropTypes.oneOf(['none', 'default', 'condensed', 'spacious']),
  /** Resets the margins of the component within the layout to generate consistent spaces. In doubt just leave it as `rest`. */
  marginReset: PropTypes.oneOf(['none', 'reset'])
}

RowLayout.defaultProps = {
  gutter: 'default',
  marginReset: 'reset'
}

export default RowLayout
