import React from 'react'
import { Edit } from 'react-admin'
import RequestEntity from "./RequestEntity";

const RequestEdit = (props) => {
    return (
        <Edit title='Edit Request' {...props}>
            <RequestEntity isEditMode={true}/>
        </Edit>
    );
}

export default RequestEdit
