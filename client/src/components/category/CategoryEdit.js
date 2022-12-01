import React from 'react'
import { Edit } from 'react-admin'
import CategoryEntity from "./CategoryEntity";

const CategoryEdit = (props) => {
    return (
        <Edit title='Edit Category' {...props}>
            <CategoryEntity isEditMode={true}/>
        </Edit>
    );
}

export default CategoryEdit
