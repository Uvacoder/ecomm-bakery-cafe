import * as React from "react"

import { Layout } from "../components"
import InnerHero from "../blocks/innerhero"
import Form from "../blocks/form"

export default function ContactPage() {
    return (
        <Layout>
            <InnerHero
                image="url('/images/contact-bg.png')"
                subheading="Contact Us"
                heading="Want to place an order or inquire about a custom cake? Fill out the form below:"
            />

            <Form />

        </Layout>
    )
};