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
                <TextField source='name' />
                <TextField source='description' />
                <EditButton basePath='/categories' />
            </Datagrid>
        </List>
    )
}

export default CategoryList
