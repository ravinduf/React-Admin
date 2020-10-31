import React from 'react'
import { List, Datagrid, TextField, EmailField, UrlField } from 'react-admin';

import MyUrlField from './MyUrlField'
import MyTextField from './MyTextField'

const UsersList = (props) => {
    return (
        <List {...props}>
            <Datagrid rowClick="edit">
                <MyTextField source="id" />
                <MyTextField source="name" />
                <EmailField source="email" />
                <MyTextField source="phone" />
                <UrlField source="website" />
                <MyUrlField source="website" />
                <TextField source="company.name" />
            </Datagrid>
        </List>
    )
}

export default UsersList
