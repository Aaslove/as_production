
function Button({ text }: { text: string }) {
    return (
        <button className="flex uppercase gap-6 font-['Neue_Montreal'] font-medium items-center px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white" >
            {text}
            < div className="w-2 h-2 bg-zinc-100 rounded-full" >

            </div >
        </button >
    )
}

export default Button