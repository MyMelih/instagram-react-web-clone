import { useState } from "react";
import Header from "./components/header";
import Messages from "./components/messages";
import Reply from "./components/reply";

export default function Chat() {
    const user = {
        name: 'Melih Yılmaz',
        avatar: 'https://pbs.twimg.com/profile_images/1507154485130444815/2UnNbwJn_400x400.jpg',
    }

    const [messages, setMessages] = useState([
        {
            from: {
                id: '884qSo8kqweaS1rNxx57gBfA1S42',
                name: 'Melih Yılmaz',
                username: 'melihyilmaz',
                avatar: 'https://pbs.twimg.com/profile_images/1507154485130444815/2UnNbwJn_400x400.jpg',
            },
            message: 'Selam'
        },
        {
            from: {
                id: '884qSo8kqweaS1rNxx57gBfA1S42',
                name: 'Melih Yılmaz',
                username: 'melihyilmaz',
                avatar: 'https://pbs.twimg.com/profile_images/1507154485130444815/2UnNbwJn_400x400.jpg',
            },
            message: 'Selam Naber'
        },
        {
            from: {
                id: '884qSo8kqweaS1rNxx57gBfA1S42',
                name: 'Melih Yılmaz',
                username: 'melihyilmaz',
                avatar: 'https://pbs.twimg.com/profile_images/1507154485130444815/2UnNbwJn_400x400.jpg',
            },
            message: 'adana'
        },
        {
            from: {
                id: '884qSo8kqweaS1rNxx57gBfA1S42',
                name: 'Melih Yılmaz',
                username: 'melihyilmaz',
                avatar: 'https://pbs.twimg.com/profile_images/1507154485130444815/2UnNbwJn_400x400.jpg',
            },
            message: 'test'
        },
    ]);

    return (
        <div className="flex-1">
            <Header user={user} />
            <Messages messages={messages} />
            <Reply setMessages={setMessages} />
        </div>
    )
}