type Props = {
    myUsername: string,
    messages: {
        username: string
        message: string
    }[],
    newUserJoinedMessage?: string
}

type Message = {
    username: string
    message: string
}[]