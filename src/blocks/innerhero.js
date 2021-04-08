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
        <section
            py="6|12|20"
            mb="200px"
            mt="-155px"
            height="50vh|60vh"
            backgroundImage={image}
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            backgroundPosition="center" {...props}>
            <div position="relative" top="350px|300px" variant="container" pt="96px">
                <div textAlign="center" width="90%|70%" mx="auto" bg="muted" p="50px|80px" mt="-200px">
                    {subheading && <h1 fontSize="3xl|4xl" fontFamily="heading" m="0" color="primary">{subheading}</h1>}
                    <div width="50px" height="2px" bg="heading" mx="auto" my="40px"></div>
                    {heading && <p fontSize="xl|3xl" lineHeight="loose|10" mt="2">{heading}</p>}
                </div>
            </div>
        </section>
    )
}