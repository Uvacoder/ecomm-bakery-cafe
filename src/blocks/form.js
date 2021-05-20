import React, { useState } from "react"
import axios from "axios";
import { VisuallyHidden } from "reflexjs"
const MyForm = () => {

    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
    });
    const handleServerResponse = (ok, msg, form) => {
        setServerState({
            submitting: false,
            status: { ok, msg }
        });
        if (ok) {
            form.reset();
        }
    };
    const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        setServerState({ submitting: true });
        axios({
            method: "post",
            url: "https://getform.io/f/81ed7aa2-aa5e-4dd2-9372-ff88ec830c04",
            data: new FormData(form)
        })
            .then(r => {
                handleServerResponse(true, "Thanks!", form);
            })
            .catch(r => {
                handleServerResponse(false, r.response.data.error, form);
            });
    };

    return (

        <div variant="container" width="90%|70%" maxWidth="850px" py="32px|80px|96px|48px">
            <form onSubmit={handleOnSubmit} display="grid" col="1|repeat(2, auto)" gap="4" mt="4" w="full|auto">
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
                    <select variant="select" id="subject" name="subject" height="36px|48px" color="gray">
                        <option value="">Subject</option>
                        <option value="Online Order">Place an Order</option>
                        <option value="Custom Cake">Custom Cake Design</option>
                        <option value="Other">Other</option>
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
                <button type="submit" variant="button.primary" colStart="span 2">Send</button>
            </form>
        </div>

    );
};

export default MyForm;