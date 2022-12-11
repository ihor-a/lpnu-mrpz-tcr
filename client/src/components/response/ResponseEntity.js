import React from 'react';
import { SimpleForm, TextInput, SelectInput, ReferenceInput, DateInput } from "react-admin";
import { RichTextInput } from 'ra-input-rich-text';
import StatusSelect from "../request/StatusSelect";

const ResponseEntity = (props) => {
    let idField = '';
    if (props.isEditMode === true) {
        idField = <TextInput disabled source='id' />;
    }

    return (
        <SimpleForm>
            {idField}
            <TextInput source='title' required style={{width: '50%'}} label='Назва'/>
            <ReferenceInput source='categories_id' reference='categories'>
                <SelectInput optionText='name' required label='Категорії'/>
            </ReferenceInput>
            <StatusSelect isListMode={false} />
            <DateInput source='solved_on' label='Вирішено'/>
            <RichTextInput source='response' label='Відповідь'/>
        </SimpleForm>
    );
};

export default ResponseEntity;