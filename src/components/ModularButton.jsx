import PropTypes from 'prop-types'

export default function ModularButton({ text, onClick, }) {
    return (
        <button
            onClick={onClick}
            className="flex w-fullborder-2 py-3 text-xl lg:text-3xl bg-rose-900 hover:bg-rose-950  w-12/12 rounded-lg  shadow-lg  font-normal text-white">
            {text}
        </button>
    )
}

ModularButton.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func
}