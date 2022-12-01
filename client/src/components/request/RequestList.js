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
        <SelectInput source="categories_id" choices={data} alwaysOn />
    ];

    return (
        <List {...props} filters={RequestFilters}>
            <Datagrid>
                <TextField source='id' />
                <TextField source='created_at' />
                <TextField source='title' />
                <SelectField source="categories_id" choices={data}/>
                <TextField source='solved_on' />
                <EditButton basePath='/requests' />
                <ShowButton basePath='/requests' />
            </Datagrid>
        </List>
    )
}

export default RequestList
