import * as React from "react"

import { Layout } from "../components"
import Hero from "../blocks/hero"
import Cta from "../blocks/cta"
import Feature from "../blocks/feature"
import FeatureAlt from "../blocks/featureright"
import { Icon } from "reflexjs"

export default function IndexPage() {
  return (
    <Layout>
      <Hero
        heading="Experience European Delicacies"
        buttons={
          <a variant="button.secondary.lg" href="/" mt="4">
            Get started <Icon name="arrow-right" size="6" ml="2" />
          </a>
        }
      />
      <Feature
        subheading="Inspired By The Tastes Of Europe"
        text="Treat yourself to some of the finest European cakes and pastries from our artisanal bakery."
        link="/menu"
        linktext="View Menu"
        image={{
          src: "/images/raspberrytart.jpg",
          alt: "Raspberry Tart",
        }}
        buttons={
          <a variant="button.accent.lg"
            href="/"
            mt="6">
            Get Started <Icon name="arrow-right" ml="2" size="4" />
          </a>
        }
      />
      <FeatureAlt
        subheading="Steeped In Tradition"
        text="Emili's Café proudly serves the finest ingredients from Europe."
        link="/about"
        linktext="About Emili's"
        image={{
          src: "/images/pastrychef.png",
          alt: "Pastry Chef",
        }}
        buttons={
          <a variant="button.accent.lg"
            href="/"
            mt="6">
            Get Started <Icon name="arrow-right" ml="2" size="4" />
          </a>
        }
      />
      <Feature
        subheading="Celebrate Special Moments"
        text="We create custom designed cakes for any occasion. From weddings to birthdays and everything in between."
        link="/customcakes"
        linktext="Customize Your Cake"
        image={{
          src: "/images/floralcake.jpg",
          alt: "Floral Cake",
        }}
        buttons={
          <a variant="button.accent.lg"
            href="/"
            mt="6">
            Get Started <Icon name="arrow-right" ml="2" size="4" />
          </a>
        }
      />
      <Cta
        heading="Place an order"
        link="https://www.ubereats.com/los-angeles/food-delivery/emilis-pasty-%26-cafe/ygjbd5nrRGeAKSyHpwG1FA"
        linktext="Order Online" />
    </Layout>
  )
}