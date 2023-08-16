import React from 'react'
import { CircularAvatar } from './CircularAvatar'

type Props = {
    username: String;
    message: String;
}

const LeftMessage = ({ username, message }: Props) => {
    return (
        <div className="left_message self-start max-w-[60%]">
            <div className='flex gap-3 items-end'>
                <div>
                    {CircularAvatar(username)}
                </div>
                <div>
                    <p className='text-slate-500 px-3 text-sm'>{username}</p>
                    <p className="bg-slate-800 text-slate-50 font-medium max-w-full break-all rounded-3xl px-3 py-2 mt-1">
                        {message}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LeftMessage