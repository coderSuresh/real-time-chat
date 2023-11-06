import React from 'react'
import RightMessage from './RightMessage'
import LeftMessage from './LeftMessage'

const MessageCard = ({ myUsername, messages }: Props) => {
    const [messageComponents, setMessageComponents] = React.useState<any>([])

    React.useEffect(() => {
        renderMessage()
    }, [messages])

    const renderMessage = () => {
        const newMessageComponents = [] as React.ReactNode[]

        let newUserName = ''

        messages.forEach((message, i) => {
            if (!message.username || !message.message) return

            if (message.type === 'join') {
                if (message.username !== newUserName) {
                    newMessageComponents.push(
                        <div key={message.username + i} className="text-center text-gray-500">
                            <span className="text-xs">{message.username} has joined the chat</span>
                        </div>
                    )
                    newUserName = message.username
                }
                return
            }

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
