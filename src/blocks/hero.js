import * as React from "react"

export default function Block({
  subheading,
  heading,
  text,
  image,
  buttons,
  children,
  ...props
}) {
  return (
    <section py="6|12|20" mt="-155px" height="60vh|75vh|100vh" backgroundImage="url('/images/hero-bg.png')" backgroundSize="cover" backgroundRepeat="no-repeat" backgroundPosition="center" {...props}>
      <div variant="container">
        <div
          display="grid"
          gridAutoFlow="dense"
          col="1"
          gap="8|8|12"
          alignItems="center"
          pt="96px"
        >
          <div
            d="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
            pt="120px|96px"
          >
            {subheading && <p variant="subheading">{subheading}</p>}
            {heading && (
              <h1 variant="heading.h1" lineHeight="1" fontSize="6xl|64px" fontWeight="light" color="muted">
                {heading}
              </h1>
            )}
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}
