import "./index.css"
import { useState } from "react";

const ContactSection = () => {

    const [nameInput, setNameInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [messageInput, setMessageInput] = useState("");

    const [answerRender, setAnswerRender] = useState("")

    let messages = []

    const onFormSubmit = (e) => {
        e.preventDefault()
        

        if (nameInput === "" || emailInput === "") {
            setAnswerRender("You should insert both your name and your email!")
        } else if (messageInput === "") {
            setAnswerRender("Insert your message in the text area")
        } else {
            setAnswerRender("Your message has been sent!")
            let singleMessage = {
                name: nameInput,
                message: messageInput
            }

            messages.push(singleMessage)
            console.log(messages)


        }



    }

    const onInputChange = (e) => {
            switch (e.target.name) {
              case "name":
                setNameInput(e.target.value);
                break;
              case "email":
                setEmailInput(e.target.value);
                break;
              case "message":
                setMessageInput(e.target.value);
                break;
            }
    }

    return <form className="contact__form" onSubmit={onFormSubmit}>
        <h2>Let us know your opinion!</h2>
        <label htmlFor="username">Temporary username</label>
            <input
            type="text"
            placeholder="Insert your name"
            name="name"
            value={nameInput}
            onChange={onInputChange}
            />
        <label htmlFor="email">Static e-mail</label>
            <input
            type="email"
            placeholder="Insert your e-mail"
            name="email"
            value={emailInput}
            onChange={onInputChange}
            />
        <label htmlFor="message">Message for us</label>
            <textarea
            placeholder="Insert your message"
            name="message"
            value={messageInput}
            onChange={onInputChange}
            />
            <input type="submit" value="send" />
        <h2 className="answer__text">{answerRender}</h2>
    </form>
}

export default ContactSection