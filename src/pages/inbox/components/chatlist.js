import classNames from "classnames";
import { NavLink, useParams } from "react-router-dom";

export default function ChatList() {

    const { conversationId } = useParams();


    const chats = [
        {
            id: 1,
            user: {
                avatar: 'https://pbs.twimg.com/profile_images/1507154485130444815/2UnNbwJn_400x400.jpg',
                name: 'Melih Yılmaz'
            },
            lastMessage: 'Selam Melih,..',
        }, {
            id: 2,
            user: {
                avatar: 'https://pbs.twimg.com/profile_images/1507154485130444815/2UnNbwJn_400x400.jpg',
                name: 'Mehmet Yılmaz'
            },
            unread: true,
            lastMessage: 'Selam Melih,..',
        }, {
            id: 3,
            user: {
                avatar: 'https://pbs.twimg.com/profile_images/1507154485130444815/2UnNbwJn_400x400.jpg',
                name: 'Havva Yılmaz'
            },
            unread: true,
            lastMessage: 'Selam Melih,..',
        }
    ]
    return (
        <div className="h-[calc(100%-60px)] overflow-auto py-3" >
            <header className="flex items-center justify-between px-5 mb-1" >
                <h6 className="text-base font-semibold">Messages</h6>
                <button className="text-brand text-sm font-semibold">18 requests</button>
            </header>
            {chats.map(chat => (
                <NavLink
                    className={classNames({
                        "h-[72px] flex items-center gap-x-4 hover:bg-zinc-50 px-5": true,
                        "font-semibold": chat?.unread,
                        "!bg-[#efefef]": +conversationId === chat.id,
                    })}
                    key={chat.id}
                    to={`/inbox/${chat.id}`}
                >
                    <img src={chat.user.avatar} className="w-14 h-14 rounded-full" alt="" />
                    <div>
                        <h6 className="text-sm">{chat.user.name}</h6>
                        <p className={`text-sm ${!chat?.unread && 'text-[#8e8e8e]'}`}>
                            {chat.lastMessage}
                        </p>
                    </div>
                </NavLink>
            ))}
        </div>
    );
}