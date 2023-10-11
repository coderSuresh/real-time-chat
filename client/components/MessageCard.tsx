import React from 'react'
import LeftMessage from './LeftMessage'
import RightMessage from './RightMessage'

type Props = {
    myUsername: string,
    messages: {
        username: string
        message: string
    }[],
    newUserJoinedMessage: string
}

const MessageCard = ({ myUsername, messages, newUserJoinedMessage }: Props) => {

    const [messageComponents, setMessageComponents] = React.useState<any>([])

    React.useEffect(() => {
        renderMessage()

        if (newUserJoinedMessage) {
            setMessageComponents((prevMessages: any) => [
                ...prevMessages,
                <div className="text-center text-gray-500 text-sm" key={newUserJoinedMessage}>
                    {newUserJoinedMessage}
                </div>
            ])
        }
    }, [messages, newUserJoinedMessage])

    // remove duplicate messages
    React.useEffect(() => {
        setMessageComponents((prevMessages: any) => {
            let newMessages = prevMessages.filter((message: any, i: number) => {
                return prevMessages.findIndex((m: any) => m.key === message.key) === i
            })
            return newMessages
        })
    }, [messageComponents])
   
    const renderMessage = () => {

        messages.forEach((message, i) => {

            if (!message.username || !message.message) return

            if (message.username === myUsername) {
                setMessageComponents((prevMessages: any) => [
                    ...prevMessages,
                    <RightMessage key={message.username + i} username={message.username} message={message.message} />
                ])
            } else {
                setMessageComponents((prevMessages: any) => [
                    ...prevMessages,
                    <LeftMessage key={message.username + i} username={message.username} message={message.message} />
                ])
            }
        })
    }

    return <>{messageComponents}</>
}

export default MessageCard