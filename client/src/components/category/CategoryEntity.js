import React from 'react';
import {SimpleForm, TextInput} from "react-admin";

const CategoryEntity = (props) => {
    let idField = '';
    if (props.isEditMode === true) {
        idField = <TextInput disabled source='id' />;
    }

    return (
        <SimpleForm>
            {idField}
            <TextInput source='name' required style={{width: '50%'}} label='Назва' />
            <TextInput source='description' required style={{width: '50%'}} label='Опис' />
        </SimpleForm>
    );
};

export default CategoryEntity;