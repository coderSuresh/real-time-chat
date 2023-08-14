import React from 'react'
import LeftMessage from './LeftMessage'
import RightMessage from './RightMessage'

type Props = {
    username: String
}

const MessageCard = ({ username }: Props) => {

    const message = "Hi there"

    return (

        <div className='flex flex-col'>
            <LeftMessage username={username} message={message} />
            <RightMessage username={username} message={message} />
        </div>

    )
}

export default MessageCard