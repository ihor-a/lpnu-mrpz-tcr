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
import StatusSelect from "./StatusSelect";

const RequestShow = () => {
    const { data } = useGetList('categories');

    return (
        <Show>
            <TabbedShowLayout>
                <Tab label="Опис Запиту">
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <SimpleShowLayout>
                                <TextField source="title" label='Назва'/>
                                <TextField source="created_at" label='Створено'/>
                                <SelectField source="categories_id" choices={data} label='Категорії'/>
                                <RichTextField source="description" label='Опис' />
                            </SimpleShowLayout>
                        </Grid>
                    </Grid>
                </Tab>
                <Tab label="Відповідь">
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <SimpleShowLayout>
                                <TextField source="title"  label='Назва'/>
                                <SelectField source="categories_id" choices={data} label='Категорії' />
                                <StatusSelect isListMode={true} />
                                <TextField source="solved_on" label='Вирішено' />
                                <RichTextField source="response" label='Відповідь' />
                            </SimpleShowLayout>
                        </Grid>
                    </Grid>
                </Tab>
            </TabbedShowLayout>
        </Show>
    );
};

export default RequestShow;