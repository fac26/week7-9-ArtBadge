import React from 'react'
import ExploreMain from './explore-main'

describe('<ExploreMain />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ExploreMain />)
  })
})