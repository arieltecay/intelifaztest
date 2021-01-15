import React from 'react';
import { Modal } from 'react-bootstrap'

const ShowDetails = (props) => {
    console.log(props);

    return (
        props.show && (
            <Modal {...props} size='lg' >
                <Modal.Title>
                    <p className='text-center'>Show Details</p>
                </Modal.Title>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Last Name</td>
                                <td>UserName</td>
                                <td>Phone</td>
                                <td>E-Mail</td>
                                <td>Age</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{props.dataSelect.name}</td>
                                <td>{props.dataSelect.lastName}</td>
                                <td>{props.dataSelect.userName}</td>
                                <td>{props.dataSelect.phone}</td>
                                <td>{props.dataSelect.age}</td>
                                <td>{props.dataSelect.email}</td>
                            </tr>
                        </tbody>
                    </table>                    
                    
                </div>
            </Modal>
        )
    )
}
export default ShowDetails