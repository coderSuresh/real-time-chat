const createCircularAvatar = (letter?: String) => {
    return (
        <div
            className='rounded-full w-8 h-8 flex items-center justify-center font-semibold text-xl bg-slate-800 text-slate-50'>
            {letter?.toUpperCase()}
        </div>
    )
}

export { createCircularAvatar }