import React from 'react'
import {List, Datagrid, TextField, EditButton, SearchInput} from 'react-admin'

const CategoryList = (props) => {

    const categoryFilters = [
        <SearchInput source="name" alwaysOn />,
    ];

    return (
        <List {...props} filters={categoryFilters}>
            <Datagrid>
                <TextField source='id' />
                <TextField source='name' label='Назва' />
                <TextField source='description' label='Опис' />
                <EditButton basePath='/categories' label='Редагувати' />
            </Datagrid>
        </List>
    )
}

export default CategoryList
