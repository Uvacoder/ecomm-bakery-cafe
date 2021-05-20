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
            <form netlify
                display="grid"
                col="1|repeat(2, auto)"
                gap="4"
                mt="4"
                w="full|auto"
            >
                <div>
                    <VisuallyHidden>
                        <label htmlFor="name">Name</label>
                    </VisuallyHidden>
                    <input
                        variant="input"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                    />
                </div>
                <div>
                    <VisuallyHidden>
                        <label htmlFor="email">Email</label>
                    </VisuallyHidden>
                    <input
                        variant="input"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                    />
                </div>
                <div>
                    <VisuallyHidden>
                        <label htmlFor="phone">Phone</label>
                    </VisuallyHidden>
                    <input
                        variant="input"
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Phone"
                    />
                </div>
                <div>
                    <VisuallyHidden>
                        <label htmlFor="subject">Subject</label>
                    </VisuallyHidden>
                    <select variant="select" id="subject" name="subject">
                        <option value="">Subject</option>
                        <option value="one">Online Order</option>
                        <option value="two">Custom Cake</option>
                        <option value="two">Other</option>
                    </select>
                </div>
                <div colStart="span 2">
                    <VisuallyHidden>
                        <label htmlFor="message">Message</label>
                    </VisuallyHidden>
                    <textarea
                        variant="textarea"
                        placeholder="Message"
                        id="message"
                        name="message"
                        rows="5"
                    />
                </div>
                <button type="submit" variant="button.primary" colStart="span 2">
                    Send message
                </button>
            </form>
        </Layout>
    )
}
