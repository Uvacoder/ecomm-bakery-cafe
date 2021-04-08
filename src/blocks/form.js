import * as React from "react"
import { VisuallyHidden } from "reflexjs"

export default function Block({
    subheading,
    heading,
    text,
    buttons,
    ...props
}) {
    return (
        <section py="6|8|12" {...props}>
            <div variant="container" width="100vw|65vw" my="12|0">
                <div display="grid" col="1" gap="8|12|16" alignItems="center">
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
                </div>
            </div>
        </section>
    )
}
