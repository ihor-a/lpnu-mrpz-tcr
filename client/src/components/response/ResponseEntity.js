import React from 'react';
import { SimpleForm, TextInput, SelectInput, ReferenceInput, DateInput } from "react-admin";
import { RichTextInput } from 'ra-input-rich-text';

const ResponseEntity = (props) => {
    let idField = '';
    if (props.isEditMode === true) {
        idField = <TextInput disabled source='id' />;
    }

    const getStatusList = () => {
        return [
            { id: 'open', name: 'Open' },
            { id: 'inProgress', name: 'In Progress' },
            { id: 'solved', name: 'Solved' }
        ];
    }

    return (
        <SimpleForm>
            {idField}
            <TextInput source='title' required style={{width: '50%'}} />
            <ReferenceInput source='categories_id' reference='categories'>
                <SelectInput optionText='name' required/>
            </ReferenceInput>
            <SelectInput source='status' required choices={getStatusList()}/>
            <DateInput source='solved_on' />
            <RichTextInput source='response' />
        </SimpleForm>
    );
};

export default ResponseEntity;