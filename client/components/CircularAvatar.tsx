const CircularAvatar = (username?: String) => {
    const letter = username?.charAt(0).toUpperCase()
    return (
        <div
            className='rounded-full w-8 h-8 flex items-center justify-center font-semibold text-xl bg-slate-800 text-slate-50'>
            {letter}
        </div>
    )
}

export { CircularAvatar }