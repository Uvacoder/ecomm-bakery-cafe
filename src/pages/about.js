import * as React from "react"

import { Layout } from "../components"
import InnerHero from "../blocks/innerhero"
import Cta from "../blocks/cta"

export default function AboutPage() {
    return (
        <Layout>
            <InnerHero
                image="url('/images/about-bg.png')"
                subheading="About Emili's Café"
                heading="Our mission is to offer an authentic European experience of baked goods that will mesmerize our clientele and leave them wanting for more."
            />
            <section py="8|12|16" mt="300px|250px" bg="backgroundLight">
                <div variant="container">
                    <div width="90vw|577px" mx="auto">
                        <p fontSize="20px" lineHeight="31px">
                            From delicately designed cakes and pastries to flavor-rich
                            sandwiches and coffee, the culinary experts at Emili’s Café have
                            mastered the art of preparing delicious baked goods.
                            <br />
                            <br />
                        Whether it is a quick midday snack or a special occasion such as a
                        wedding or birthday, you will find that our tempting selection is
                        impossible to resist.
                        <br />
                            <br />
                        We deliver years of culture, tradition, and history packed in carefully cooked
                        and neatly assembled baked goods.
                    </p>
                    </div>
                </div>
            </section>

            <section mt="-36px" py="60px" bg="backgroundLight">
                <container>
                    <div width="90vw|577px" mx="auto">
                        <h2 fontFamily="heading" fontSize="31px" color="primary" textAlign="center" lineHeight="57px">
                            At Emili’s Café, we deliver an orchestra of European flavors to your
                            delight!
                        </h2>
                    </div>
                </container>
            </section>

            <section mt="-36px" py="40px" bg="backgroundLight">
                <container>
                    <div width="90vw|577px" mx="auto">
                        <p fontSize="20px" lineHeight="31px">
                            We continue to stay in touch with our roots and offer a unique and exciting
                            selection of cakes, pastries, sandwiches, and coffees inspired by French,
                            German, and Swiss ingredients.
                        </p>
                    </div>
                </container>
            </section>

            <section mt="-36px" py="60px" bg="backgroundLight">
                <container>
                    <div width="90vw|577px" mx="auto">
                        <h2 fontFamily="heading" fontSize="31px" color="primary" textAlign="center" lineHeight="57px">
                            Renowned for our traditional recipes, we deliver an unmatched and
                            authentic experience.
                        </h2>
                    </div>
                </container>
            </section>

            <section mt="-36px" py="40px" bg="backgroundLight">
                <container>
                    <div width="90vw|577px" mx="auto">
                        <p fontSize="20px" lineHeight="31px">
                            We aim to exceed the expectations of our clientele. Our pride lies within the warm and welcoming ambiance we have created to accompany our unique offerings made with love.
                        </p>
                    </div>
                </container>
            </section>
            <Cta
                heading="Explore our menu for the full experience."
                link="/menu"
                linktext="View Menu" />
        </Layout>
    )
}
