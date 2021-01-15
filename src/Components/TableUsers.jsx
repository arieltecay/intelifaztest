import React, { useState } from 'react'
import ShowDetails from './ShowDetails'

const TableUsers = (props) => {
    const [dataSelect, setDataSelect] = useState('')
    const [showModal, setShowModal] = useState(false)
    const selectData = (data) => {
        setDataSelect(data)
        setShowModal(true)
    }

    return (
        <div>
            {showModal && <ShowDetails show={showModal} onHide={() => setShowModal(false)} dataSelect={dataSelect} />}
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>LastName</td>
                        <td>UserName</td>
                        <td>Acción</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.users.length > 0 ?
                            props.users.map(user => (
                                <tr key={user.id} onClick={() => selectData(user)} >
                                    <td>{user.name}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.userName}</td>
                                    <td>
                                        <button
                                            className='button muted-button'
                                            onClick={() => props.deleteUser(user.id)}
                                        >Delete</button>
                                    </td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan={5} >No Users</td>
                                </tr>
                            )
                    }
                </tbody>

            </table>
        </div>
    )
}
export default TableUsers