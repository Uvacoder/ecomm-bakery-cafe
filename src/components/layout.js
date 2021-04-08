import * as React from "react"

import { Navbar, Footer, SEO } from "."
import config from "../config"

export function Layout({ children }) {
  const { site } = config
  return (
    <>
      <html lang="en"></html>
      <SEO />
      <Navbar branding={site.branding} links={site.links} />
      <main>{children}</main>
      <Footer copyright={site.copyright} />
    </>
  )
}
