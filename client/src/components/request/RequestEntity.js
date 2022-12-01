import React from 'react';
import {SimpleForm, TextInput, SelectInput, ReferenceInput, required} from "react-admin";
import { RichTextInput } from 'ra-input-rich-text';

const RequestEntity = (props) => {
    let idField = '';
    if (props.isEditMode === true) {
        idField = <TextInput disabled source='id' />;
    }

    return (
        <SimpleForm>
            {idField}
            <TextInput disabled source="created_at" defaultValue={(new Date()).toLocaleDateString()}/>
            <TextInput source='title' required style={{width: '50%'}} />
            <ReferenceInput source='categories_id' reference='categories'>
                <SelectInput optionText='name' required/>
            </ReferenceInput>
            <RichTextInput source='description' validate={required()} />
        </SimpleForm>
    );
};

export default RequestEntity;