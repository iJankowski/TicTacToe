import {Component} from "react";
import CloseIcon from '@mui/icons-material/Close';
import {createAndJoin} from "../Header/UserBar/CreateAndJoin";

class NicknameModalCreateGame extends Component {
    handleCreateGame = (isGamePrivate) => {
        this.props.setIsNickNameSet(()=> {
            if (this.props.nickName !== "" && this.props.isNickNameSet === true) {
                createAndJoin(this.props.nickName, isGamePrivate === false ? "new" : "newPrivate")
                    .then(x => {
                            console.log(x.data)
                            this.props.showModal()
                        }
                    )
                    .catch(x => {
                            console.log(x.message)
                        }
                    );
            } else {
                alert('Nickname is not set')
            }
        })
    }
    render() {
        return (
            <div
                className={`${this.props.modal ? "block" : "hidden"} fixed top-0 left-0 bg-black/50 w-full h-full flex justify-center items-center`}>

                <div className="rounded-2xl p-10 bg-slate-900 relative">
                    <div onClick={this.props.showModal} className="absolute top-1 right-1 buttonSchema buttonHover">
                        <CloseIcon/>
                    </div>
                    <div>
                        {this.props.isNickNameSet === false ? <div>What is your nickname?</div> : null}
                        {this.props.isNickNameSet === false ? <input className="mt-2 bg-slate-800 block" onChange={this.props.inputNickName} value={this.props.nickName}/> : null}
                        <div>Do you want a private game?</div>
                        <div className="flex justify-end">
                        <div className="buttonSchema buttonHover p-2" onClick={() => this.handleCreateGame(true)}>Yes</div>
                        <div className="buttonSchema buttonHover p-2" onClick={() => this.handleCreateGame(false)}>No</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NicknameModalCreateGame