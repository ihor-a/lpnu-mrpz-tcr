import React from 'react'
import {useGetList, List, Datagrid, TextField, SelectField, EditButton, SearchInput, SelectInput } from 'react-admin'

const ResponseList = (props) => {
    const { data } = useGetList('categories');
    if (typeof data === 'undefined') {
        return <Datagrid/>
    }

    const getStatusList = () => {
        return [
            { id: 'open', name: 'Відкрито' },
            { id: 'inProgress', name: 'В роботі' },
            { id: 'solved', name: 'Вирішено' }
        ];
    }

    const RequestFilters = [
        <SearchInput source="title" alwaysOn />,
        <SelectInput source="categories_id" choices={data} alwaysOn label='Категорії' />,
        <SelectInput source="status" choices={getStatusList()} alwaysOn label='Статус' />,
    ];

    return (
        <List {...props} filters={RequestFilters}>
            <Datagrid>
                <TextField source='id' />
                <TextField source='created_at' label='Створено' />
                <TextField source='title' label='Назва' />
                <SelectField source="categories_id" choices={data} label='Категорії' />
                <SelectField source="status" choices={getStatusList()} label='Статус' />
                <TextField source='solved_on' label='Вирішено' />
                <EditButton basePath='/responses' label='Редагувати' />
            </Datagrid>
        </List>
    )
}

export default ResponseList
