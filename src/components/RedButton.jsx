import PropTypes from 'prop-types'

export default function RedButton({ text, onClick }) {
    return (
        <button
            onClick={onClick}
            className="my-3 border-2 text-base lg:text-xl border-rose-900 hover:bg-rose-900 hover:text-white w-60 rounded-lg p-4 shadow-lg  font-normal text-rose-900">
            {text}
        </button>
    )
}

RedButton.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func
}