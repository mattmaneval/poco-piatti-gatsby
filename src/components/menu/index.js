import React, { Component, useState } from 'react'
import styled from 'styled-components'

// Components
import HeadingGroup from '../HeadingGroup/index'
import Seafood from './Seafood'
import Vegetarian from './Vegetarian'
import Carne from './Carne'
import BigPlates from './BigPlates'
import Pizza from './Pizza'
import Salads from './Salads'
import Sides from './Sides'

// Images
import PrivateEventsImage from '../../images/private-events-image.jpg'

// Styles
import theme from '../../styles/theme'
import mixins from '../../styles/mixins'

const { space, color } = theme

const BackgroundImageContainer = styled.div`
  position: relative;
  height: 100%;
`

const BackgroundImage = styled.div`
  background-image: url(${PrivateEventsImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-size: 100%;
  filter: blur(1em);
  height: 100%;
  mask-image: linear-gradient(
    180deg,
    ${color.foreground},
    rgba(${color.foreground}, 0)
  );
  -webkit-mask-image: linear-gradient(
    180deg,
    ${color.foreground},
    rgba(${color.foreground}, 0)
  );
  opacity: 0.5;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
`

const FullMenuStyles = styled.section`
  .tabs {
  }

  .tabs__tablist {
    position: fixed;
    left: 0;
    z-index: 1;
  }

  .tabs__content {
    ${mixins.innerWrap}
    width: 100%;
  }

  .tabs__tablist__link {
    ${mixins.animate}
    color: ${color.foreground};
    cursor: pointer;
    display: block;
    font-size: 1.25em;
    position: relative;
    background: ${color.background};
    padding: 1em;

    &:hover {
      background: ${color.callout};
      color: ${color.background};
    }
  }

  .tabs__tablist__link--selected {
    background: ${color.callout};

    color: ${color.background};
  }
`

function Tabs({ children, selectedTab, onChangeTab }) {
  const tabProps = []

  const content = React.Children.map(children, (child) => {
    if (child.type === Tab) {
      const { title, name } = child.props
      tabProps.push({ title, name })

      // By default show first tab if there is none selected
      if (
        selectedTab ? selectedTab !== child.props.name : tabProps.length !== 1
      ) {
        return null
      }
    }
    return child
  })

  const finalSelectedTab =
    selectedTab || (tabProps.length > 0 && tabProps[0].name)

  return (
    <div className="tabs">
      <Tablist
        selectedTab={finalSelectedTab}
        onChangeTab={onChangeTab}
        tabs={tabProps}
      />
      <div className="tabs__content">{content}</div>
    </div>
  )
}

function Tablist({ tabs, selectedTab, onChangeTab }) {
  const linkClass = (selected) => {
    const c = 'tabs__tablist__link'
    return selected ? `${c} ${c}--selected` : c
  }

  return (
    <div className="tabs__tablist">
      {tabs.map(({ name, title }) => (
        <div aria-selected={name === selectedTab} role="tab" key={name}>
          <a
            className={linkClass(name === selectedTab)}
            onClick={() => onChangeTab(name)}
          >
            {title}
          </a>
        </div>
      ))}
    </div>
  )
}

function Tab({ name, children }) {
  return (
    <div id={`tab-${name}`} className="tabs__tab">
      {children}
    </div>
  )
}

class FullMenu extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {}
  }

  render() {
    return (
      <FullMenuStyles>
        <BackgroundImageContainer>
          <BackgroundImage />

          <Tabs
            selectedTab={this.state.selectedTab}
            onChangeTab={(selectedTab) => this.setState({ selectedTab })}
          >
            <Tab name="first" title="Seafood">
              <Seafood />
            </Tab>
            <Tab name="second" title="Carne">
              <Carne />
            </Tab>
            <Tab name="third" title="Vegetarian">
              <Vegetarian />
            </Tab>
            <Tab name="fourth" title="Big Plates">
              <BigPlates />
            </Tab>
            <Tab name="fifth" title="Pizza">
              <Pizza />
            </Tab>
            <Tab name="sixth" title="Salads">
              <Salads />
            </Tab>
            <Tab name="seventh" title="Sides">
              <Sides />
            </Tab>
          </Tabs>
        </BackgroundImageContainer>
      </FullMenuStyles>
    )
  }
}

export default FullMenu
