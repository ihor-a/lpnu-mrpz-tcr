import React from 'react'
import { Create } from 'react-admin'
import CategoryEntity from "./CategoryEntity";

const CategoryCreate = (props) => {
    return (
        <Create title='Create Category' {...props}>
            <CategoryEntity isEditMode={false}/>
        </Create>
    )
}

export default CategoryCreate
