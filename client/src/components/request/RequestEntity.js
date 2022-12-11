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
            <TextInput disabled source="created_at" defaultValue={(new Date()).toLocaleDateString()} label='Створено'/>
            <TextInput source='title' required style={{width: '50%'}} label='Назва' />
            <ReferenceInput source='categories_id' reference='categories'>
                <SelectInput optionText='name' required label='Категорії'/>
            </ReferenceInput>
            <RichTextInput source='description' validate={required()} label='Опис'/>
        </SimpleForm>
    );
};

export default RequestEntity;