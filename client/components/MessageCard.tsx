import React from 'react'
import RightMessage from './RightMessage'
import LeftMessage from './LeftMessage'

const MessageCard = ({ myUsername, messages, newUserJoinedMessage }: Props) => {
    const [messageComponents, setMessageComponents] = React.useState<any>([])

    React.useEffect(() => {
        renderMessage()
    }, [messages, newUserJoinedMessage])

    const renderMessage = () => {
        const newMessageComponents = [] as React.ReactNode[]

        messages.forEach((message, i) => {
            if (!message.username || !message.message) return

            if (message.username === myUsername) {
                newMessageComponents.push(
                    <RightMessage key={message.username + i} username={message.username} message={message.message} />
                )
            } else {
                newMessageComponents.push(
                    <LeftMessage key={message.username + i} username={message.username} message={message.message} />
                )
            }
        })

        setMessageComponents(newMessageComponents)
    }

    return <>{messageComponents}</>
}

export default MessageCard
