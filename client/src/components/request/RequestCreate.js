import React from 'react'
import { Create } from 'react-admin'
import RequestEntity from "./RequestEntity";

const RequestCreate = (props) => {
    return (
        <Create title='Create Request' {...props}>
            <RequestEntity isEditMode={false}/>
        </Create>
    )
}

export default RequestCreate
