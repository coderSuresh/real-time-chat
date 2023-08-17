import React from 'react'
import { CircularAvatar } from './CircularAvatar'

type Props = {
    username: String;
    message: String;
}

const RightMessage = ({ username, message }: Props) => {
    return (
        <div className="right_message mt-3 self-end max-w-[60%]">
            <div className='flex flex-row-reverse gap-3 items-end'>
                <div>
                    {CircularAvatar(username)}
                </div>
                <div className='flex flex-col'>
                    <p className='text-slate-500 px-3 text-sm self-end'>{username}</p>
                    <p className="bg-slate-100 text-right max-w-fit self-end text-slate-800 font-medium rounded-3xl break-all px-3 py-2 mt-1">
                        { message }
                    </p>
                </div>
            </div>
        </div>
    )
}

export default RightMessage