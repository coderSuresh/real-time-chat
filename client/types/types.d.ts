type Props = {
    myUsername: string,
    messages: {
        username: string,
        message: string,
        type?: string,
    }[],
    newUserJoinedMessage?: string,
}

type Message = {
    username: string,
    message: string,
    type?: string,
}[]