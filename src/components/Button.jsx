export default function Button({ text }) {
    return (
        <button
            className="border-2 border-orange-300 hover:bg-orange-300 hover:text-black w-60 rounded-lg p-4 shadow-lg text-base font-normal text-orange-300">
            {text}
        </button>
    )
}