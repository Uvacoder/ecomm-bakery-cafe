import * as React from "react"
import { Icon } from "reflexjs"

export default function Block({
    subheading,
    heading,
    text,
    image,
    link,
    linktext,
    buttons,
    ...props
}) {
    return (
        <section py="4|6|12|20" position="relative" {...props}>
            <div variant="container" bg="muted">
                <div display="none|grid" col="1|1|480px 1fr" gap="6|8|12">
                    {image && (
                        <img
                            position="relative"
                            top="60px"
                            left="40px"
                            rounded="lg||none"
                            mt="4|6|0"
                            {...image}
                        />
                    )}
                    <div pl="10">
                        {subheading && <p fontFamily="body" variant="subheading">{subheading}</p>}
                        {text && (
                            <p fontSize="4xl" fontFamily="heading" lineHeight="56px" color="heading" my="6">
                                {text}
                            </p>
                        )}
                        <div>
                            <a href={link} letterSpacing="1" color="primary" fontSize="xl" py="80px" textDecoration="underline">{linktext}</a>
                        </div>
                    </div>
                </div>
                {/** Mobile Style */}
                <div display="grid|none" my="6" col="1|1|480px 1fr" gap="6|6|10">
                    <div>
                        {subheading && <p fontFamily="body" variant="subheading">{subheading}</p>}
                        {image && (
                            <img
                                position="relative"
                                rounded="lg||md"
                                mt="4|6|0"
                                {...image}
                            />
                        )}
                        {text && (
                            <p fontSize="4xl" lineHeight="56px" fontFamily="heading" color="heading" my="6">
                                {text}
                            </p>
                        )}
                        <div pb="12">
                            <a href={link} letterSpacing="1" color="primary" fontSize="xl" py="80px" textDecoration="underline">{linktext}</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}