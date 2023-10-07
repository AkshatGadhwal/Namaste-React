import React, { useState, useEffect } from 'react';

function ChatGPT() {
    const [messages, setMessages] = useState([]);
    const [promt, setPromt] = useState('');
    const API_URL = 'https://api.openai.com/v1/chat/completions';
    const USR_NAME = 'user';
    const ASST_NAME = 'assistant';

    function sendMessage(message) {
        setMessages([...messages, { content: message, role: 'user' }]);
    }

    useEffect(() => {
        // Initialize chat with welcome message from GPT model
        const welcomeMessage = 'Hello! How can I assist you today?';
        setMessages([{ content: welcomeMessage, role: ASST_NAME }]);
    }, []);

    useEffect(() => {
        // Send user's message to GPT model and add response to messages
        const lastMessage = messages[messages.length - 1];
        if (lastMessage?.role === USR_NAME) {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json',
                            'Authorization': 'Bearer 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', },
                body: JSON.stringify({ 
                    "model": "gpt-3.5-turbo",
                    "messages": messages,  
                    "temperature": 0.7,
                 })
            };
            fetch(API_URL, requestOptions)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    console.log(data?.choices?.message?.content);
                    setMessages([...messages, { content: data?.choices[0].message?.content, role: ASST_NAME }]);
                });
        }
    }, [messages]);

    return (
        <div className='dark:bg-gray-500 text-center'>
            <ul>
                {messages.map((message, index) => (
                    <li key={index} className={message.role === USR_NAME ? "dark:bg-slate-600" :"dark:bg-gray-500" }>
                        {message.content}
                    </li>
                ))}
            </ul>
                <form onSubmit={event => {
                    event.preventDefault();
                    const messageInput = (event.target as HTMLFormElement).elements.message;
                    sendMessage(messageInput.value);
                    messageInput.value = '';
                }}>
                <input className='dark:bg-slate-600 ms-16' type="text" name="message" />
                <button type="submit" className='mx-4 m-2'>Send</button>
            </form>
        </div>
    );
}

export default ChatGPT;
