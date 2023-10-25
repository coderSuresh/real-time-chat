import React from 'react'
import LeftMessage from './LeftMessage'
import RightMessage from './RightMessage'

const MessageCard = ({ myUsername, messages, newUserJoinedMessage }: Props) => {

    const [messageComponents, setMessageComponents] = React.useState<any>([])

    React.useEffect(() => {
        renderMessage()

        if (newUserJoinedMessage) {
            setMessageComponents((prevMessages: Message) => [
                ...prevMessages,
                <div className="text-center text-gray-500 text-sm" key={newUserJoinedMessage}>
                    {newUserJoinedMessage}
                </div>
            ])
        }
    }, [messages, newUserJoinedMessage])

    // remove duplicate messages
    React.useEffect(() => {
        setMessageComponents((prevMessages: Message) => {
            let newMessages = prevMessages.filter((message: any, i: number) => {
                return prevMessages.findIndex((m: any) => m.key === message.key) === i
            })
            return newMessages
        })
    }, [messages])

    const renderMessage = () => {

        messages.forEach((message, i) => {

            if (!message.username || !message.message) return

            if (message.username === myUsername) {
                setMessageComponents((prevMessages: Message) => [
                    ...prevMessages,
                    <RightMessage key={message.username + i} username={message.username} message={message.message} />
                ])
            } else {
                setMessageComponents((prevMessages: Message) => [
                    ...prevMessages,
                    <LeftMessage key={message.username + i} username={message.username} message={message.message} />
                ])
            }
        })
    }

    return <>{messageComponents}</>
}

export default MessageCard