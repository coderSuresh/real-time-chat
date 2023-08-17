import React from 'react'
import LeftMessage from './LeftMessage'
import RightMessage from './RightMessage'

type Props = {
    myUsername: string,
    messages: {
        username: string,
        message: string
    }[]
}

const MessageCard = ({ myUsername, messages }: Props) => {

    const renderMessage = () => {
        return messages.map((message, i) => {
          
            if(!message.username || !message.message) return null

            if (message.username === myUsername) {
                return <RightMessage key={i} username={message.username} message={message.message} />
            } else {
                return <LeftMessage key={i} username={message.username} message={message.message} />
            }
        })
    }

    return (

        <div className='flex flex-col'>
            {renderMessage()}
        </div>

    )
}

export default MessageCard