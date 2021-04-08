import * as React from "react"

import { Layout } from "../components"
import InnerHero from "../blocks/innerhero"
import Cta from "../blocks/cta"

export default function CustomCakesPage() {
    return (
        <Layout>
            <InnerHero
                image="url('/images/cakes-bg.png')"
                subheading="Custom Cake Design"
                heading="We make special moments all the more memorable by designing, creating, and putting together elegant and aesthetic custom cakes."
            />
            <section py="8|12">
                <div width="90vw|577px" mx="auto" mt="100px">
                    <h2 variant="text.menuheading" textAlign="center">Wedding Cakes</h2>
                    <img src="/images/weddingcake.jpg" alt="Emili's Café - Wedding Cakes" rounded="lg|md" my="8" />
                    <p fontSize="xl" lineHeight="30px">
                        Your wedding is a day that you'll never forget and one that should be treasured forever.
                    <br />
                        <br />
                    With hundreds of options, our team will create exquisite designs that complement the theme of your wedding.
                    <br />
                        <br />
                    With unprecedented attention to detail, you can be confident that each detail of your cake will be created to absolute perfection.
                </p>
                </div>

                <div width="90vw|577px" mx="auto" mt="100px">
                    <h2 variant="text.menuheading" textAlign="center">Anniversaries</h2>
                    <img src="/images/floralcake.jpg" alt="Emili's Café - Wedding Cakes" rounded="lg|md" my="8" />
                    <p fontSize="xl" lineHeight="30px">
                        Nothing says I love you like a personalized cake.
                    <br />
                        <br />
                    You can design your cake using your partners' favorite flavors and decor, with a personalized message or photo that you both cherish.
                </p>
                </div>

                <div width="90vw|577px" mx="auto" mt="100px">
                    <h2 variant="text.menuheading" textAlign="center">Holiday Cakes</h2>
                    <img src="/images/logcake.jpg" alt="Emili's Café - Wedding Cakes" rounded="lg|md" my="8" />
                    <img src="/images/gingerbread-house.jpg" alt="Emili's Café - Wedding Cakes" rounded="lg|md" my="8" />
                    <p fontSize="xl" lineHeight="30px">
                        Celebrate with a holiday themed cake!
                    <br />
                        <br />
                    Christmas, Easter, 4th of July, and more.
                </p>
                </div>

            </section>

            <Cta
                heading="Choose your Size, Cake, Filling and Decoration"
                link="tel:+13104736999"
                linktext="Call for quote" />
        </Layout>
    )
}
