import React from 'react'
import { Edit } from 'react-admin'
import ResponseEntity from "./ResponseEntity";

const ResponseEdit = (props) => {
    return (
        <Edit title='Edit Request' {...props}>
            <ResponseEntity isEditMode={true}/>
        </Edit>
    );
}

export default ResponseEdit
