import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import { find, isEmpty, propOr } from 'ramda'
// import Perms from 'components/Perms'
import MenuItem from './MenuItem'

const SubMenus = styled('div')`
  max-height: ${({ open }) => (open ? '500vh' : '0')};
  overflow: hidden;
  transition: ${({ theme }) => theme.transition.primary};
  & > a:last-child {
    margin-bottom: 0;
  }
`

const Menu = (props) => {
  const { list, open } = props

  // States
  const [openSubmenus, setOpenSubmenus] = useState(null)

  // Location
  const { pathname } = useLocation()
  // Render
  return list.map((item, index) => {
    const { children, outside, url, perms = [], tabs = [], ...rest } = item
    // Const
    const withCurrentTab =
      children &&
      find(({ tabs = [] }) => {
        return tabs && find(({ url }) => url === pathname)(tabs)
      })(children)
    const subTabs = propOr([], 'tabs', withCurrentTab)
    const isSubActive = children && find(({ url }) => url === pathname)(children)
    const isSubActiveTab = subTabs.find(({ url }) => url === pathname)
    const isActiveTab = tabs.find(({ url }) => url === pathname)
    const isOpen = `${openSubmenus}` === `${index}`
    const hasPerms = false
    if ((isSubActiveTab || isSubActive) && openSubmenus === null) {
      setOpenSubmenus(`${index}`)
    }

    // Handlers
    const handleToggleSubMenus = () => {
      !isOpen
        ? setOpenSubmenus(`${index}`)
        : `${openSubmenus}` === `${index}` && setOpenSubmenus('')
      if (url === '/dashboard') {
        // window.location.pathname = url
      }
    }

    // MenuItem
    const menuItem = (
      <MenuItem
        pathname={pathname}
        smart={!open}
        isActive={isActiveTab}
        url={url}
        outside={outside}
        {...rest}
      />
    )

    // MenuItemWithChildren
    const menuItemWithChildren = (
      <>
        <MenuItem
          pathname={pathname}
          url={url}
          withChildren={true}
          outside={outside}
          smart={!open}
          isOpen={isOpen}
          onClick={handleToggleSubMenus}
          {...rest}
        />
        <SubMenus open={isOpen}>
          {children &&
            children.map((subItem, subIndex) => {
              const { tabs, ...rest } = subItem

              const subPerms = propOr([], 'perms', subItem)
              const isActiveChild = tabs && find(({ url }) => url === pathname)(tabs)
              const hasSubPerms = !isEmpty(subPerms)

              const subItemContent = (
                <MenuItem
                  pathname={pathname}
                  outside={outside}
                  smart={!open}
                  isSub={true}
                  isActive={isActiveChild}
                  url={url}
                  key={subIndex}
                  {...rest}
                />
              )

              // Render
              if (hasSubPerms) {
                // return <Perms perms={subPerms}>{subItemContent}</Perms>
                return 1
              } else {
                return subItemContent
              }
            })}
        </SubMenus>
      </>
    )

    const renderContent = (
      <Fragment key={index}>{children ? menuItemWithChildren : menuItem}</Fragment>
    )

    // Render
    if (hasPerms) {
      return <Perms perms={perms}>{renderContent}</Perms>
    } else {
      return renderContent
    }
  })
}

Menu.defaultProps = {
  list: [],
}
Menu.propTypes = {
  list: PropTypes.array,
}
export default Menu
