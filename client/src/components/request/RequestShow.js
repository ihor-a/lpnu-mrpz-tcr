import React from 'react';
import {
    Show,
    SimpleShowLayout,
    TabbedShowLayout,
    Tab,
    TextField,
    RichTextField,
    SelectField,
    useGetList
} from 'react-admin';
import { Grid } from "@material-ui/core";

const RequestShow = () => {
    const { data } = useGetList('categories');
    const getStatusList = () => {
        return [
            { id: 'open', name: 'Open' },
            { id: 'inProgress', name: 'In Progress' },
            { id: 'solved', name: 'Solved' }
        ];
    }

    return (
        <Show>
            <TabbedShowLayout>
                <Tab label="Request Description">
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <SimpleShowLayout>
                                <TextField source="title" />
                                <TextField source="created_at" />
                                <SelectField source="categories_id" choices={data}/>
                                <RichTextField source="description" />
                            </SimpleShowLayout>
                        </Grid>
                    </Grid>
                </Tab>
                <Tab label="Response">
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <SimpleShowLayout>
                                <TextField source="title" />
                                <SelectField source="categories_id" choices={data}/>
                                <SelectField source="status" choices={getStatusList()}/>
                                <TextField source="solved_on" />
                                <RichTextField source="response" />
                            </SimpleShowLayout>
                        </Grid>
                    </Grid>
                </Tab>
            </TabbedShowLayout>
        </Show>
    );
};

export default RequestShow;