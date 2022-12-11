import React from 'react'
import {
    useGetList,
    List,
    Datagrid,
    TextField,
    SelectField,
    EditButton,
    SearchInput,
    SelectInput,
    ShowButton
} from 'react-admin'

const RequestList = (props) => {
    const { data } = useGetList('categories');
    if (typeof data === 'undefined') {
        return <Datagrid/>
    }

    const RequestFilters = [
        <SearchInput source="title" alwaysOn />,
        <SelectInput source="categories_id" choices={data} alwaysOn label='Категорії' />
    ];

    return (
        <List {...props} filters={RequestFilters}>
            <Datagrid>
                <TextField source='id' />
                <TextField source='created_at' label='Створено' />
                <TextField source='title' label='Назва' />
                <SelectField source="categories_id" choices={data} label='Категорії' />
                <TextField source='solved_on' label='Вирішено' />
                <EditButton basePath='/requests' label='Редагувати' />
                <ShowButton basePath='/requests' label='Перегляд' />
            </Datagrid>
        </List>
    )
}

export default RequestList
