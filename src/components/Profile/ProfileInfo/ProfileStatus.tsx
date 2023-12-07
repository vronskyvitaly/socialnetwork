import React, {ChangeEvent} from 'react';

type ProfileStatusType = {
    status: string
    updateUserStatusTC:(newStatus:string)=>void
}

export class ProfileStatus extends React.Component<ProfileStatusType> {


    state = {
        editMode: false,
        status: this.props.status
    }


    activateEditMode =  () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode =  () => {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatusTC(this.state.status)
    }

    onStatusChange = (e:ChangeEvent<HTMLInputElement>) => {
       this.setState({
           status: e.currentTarget.value
       })
    }

    render() {
        return (
            <>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || "not status"}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange}  autoFocus onBlur={this.deactivateEditMode} value={this.state.status}/>
                    </div>
                }
            </>

        );
    }
}

