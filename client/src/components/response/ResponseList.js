import React from 'react'
import {useGetList, List, Datagrid, TextField, SelectField, EditButton, SearchInput, SelectInput } from 'react-admin'

const ResponseList = (props) => {
    const { data } = useGetList('categories');
    if (typeof data === 'undefined') {
        return <Datagrid/>
    }

    const getStatusList = () => {
        return [
            { id: 'open', name: 'Open' },
            { id: 'inProgress', name: 'In Progress' },
            { id: 'solved', name: 'Solved' }
        ];
    }

    const RequestFilters = [
        <SearchInput source="title" alwaysOn />,
        <SelectInput source="categories_id" choices={data} alwaysOn />,
        <SelectInput source="status" choices={getStatusList()} alwaysOn />
    ];

    return (
        <List {...props} filters={RequestFilters}>
            <Datagrid>
                <TextField source='id' />
                <TextField source='created_at' />
                <TextField source='title' />
                <SelectField source="categories_id" choices={data}/>
                <SelectField source="status" choices={getStatusList()}/>
                <TextField source='solved_on' />
                <EditButton basePath='/responses' />
            </Datagrid>
        </List>
    )
}

export default ResponseList
