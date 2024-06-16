import modalImg from "../assets/images/modalPhoto.png"
import Button from "./Button"

export default function SignInModal() {
    return (
        <div className="modal_container">
            <div className="modal">
                <div className="img">
                    <img src={modalImg} />
                    <div className="content">
                        <h2>Sign up</h2>
                        <h3>sign il for order </h3>
                    </div>
                    <div>
                        <Button text="Go To Shop" />
                        <Button text="Go To Home" />
                    </div>
                </div>
            </div>
        </div>
    )
}