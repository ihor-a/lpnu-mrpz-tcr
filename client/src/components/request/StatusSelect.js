import React from 'react';
import {SelectField, SelectInput} from "react-admin";

const StatusSelect = (props)  => {

    const getStatusList = () => {
        return [
            { id: 'open', name: 'Відкрито' },
            { id: 'inProgress', name: 'В роботі' },
            { id: 'solved', name: 'Вирішено' }
        ];
    }

    return props.isListMode === false ?
        <SelectInput source='status' required choices={getStatusList()} label='Статус' /> :
        <SelectField source="status" choices={getStatusList()} label='Статус' alwaysOn />;

}

export default StatusSelect;
