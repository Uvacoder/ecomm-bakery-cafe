import * as React from "react"
import { Link } from "gatsby"
import { Icon } from "reflexjs"

export function Navbar({ branding, links, ...props }) {
  const [showMenu, setShowMenu] = React.useState(false)

  return (
    <header py="6" bg="transparent" {...props}>
      <div variant="container">
        <div display="flex" alignItems="center">
          {branding && (
            <Link to="/">
              <img src="/images/logo.png" alt="Emili's Café" width="100px" />
            </Link>
          )}
          <NavLinks links={links} display="none|grid" />
          <button
            display="flex|none"
            p="2"
            size="14"
            ml="auto"
            color="muted"
            onClick={() => setShowMenu(!showMenu)}
          >
            <Icon name="menu-alt" size="10" />
          </button>
        </div>
      </div>
      <div
        position="absolute"
        zIndex="1000"
        bg="heading"
        textAlign="center"
        top="24"
        left="4"
        right="4"
        px="4"
        rounded="xl"
        overflow="scroll"
        boxShadow="3xl"
        border="1px solid"
        borderColor="border"
        transform={`scale(${showMenu ? 1 : 0.95})`}
        visibility={showMenu ? "visible" : "hidden"}
        opacity={showMenu ? 1 : 0}
        transition="all .25s ease-in"
        transformOrigin="100% 0"
        maxHeight="95vh"
        display="block|none"
      >
        <NavLinks links={links} py="8" sx={{
          color: `primary!important`,
        }} />
      </div>
    </header >
  )
}

export function NavLinks({ links, ...props }) {
  return links.length ? (
    <div
      display="grid"
      col={`1|repeat(${links.length}, auto)`}
      gap="8|10|12"
      ml="auto"
      {...props}
    >
      {links.map((link, index) => (
        <Link key={index} to={link.href}>
          <span
            variant="text"
            textAlign="left|center"
            fontSize="xl|md"
            px="4|0"
            color="background"
            _hover={{
              color: "primary",
            }}
          >
            {link.title}
          </span>
        </Link>
      ))}
    </div>
  ) : null
}
