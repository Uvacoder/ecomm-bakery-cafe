import * as React from "react"

export default function Cta({
    subheading,
    heading,
    text,
    buttons,
    link,
    linktext,
    ...props
}) {
    return (
        <section py="6|8|12|20" {...props}>
            <div variant="container">
                <div
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    textAlign="center"
                    width="90%|70%"
                    mx="auto"
                    bg="muted"
                    p="60|80px"
                    mb="-100px|-140px"
                    position="relative"
                    zIndex="10"
                >
                    {heading && (
                        <h2 variant="heading.h2" fontWeight="bolder" lineHeight="tight">
                            {heading}
                        </h2>
                    )}
                    {text && (
                        <p variant="text.lead" mt="2">
                            {text}
                        </p>
                    )}
                    <a href={link} letterSpacing="1" color="primary" fontSize="xl" py="8" textDecoration="underline">{linktext}</a>
                </div>
            </div>
        </section>
    )
}