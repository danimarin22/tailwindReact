export default function Button({ text, onClick }) {
    return (
        <button
            onClick={onClick}
            className="border-2 text-base lg:text-xl border-orange-300 hover:bg-orange-300 hover:text-black w-60 rounded-lg p-4 shadow-lg  font-normal text-orange-300">
            {text}
        </button>
    )
}