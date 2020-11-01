import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import UserList from './components/Users'
import PostList from './components/PostList'

const dataProvider = jsonServerProvider(`${process.env.REACT_APP_API_URL}`);

const App = () => (
    <Admin dataProvider={dataProvider} >
        <Resource name="posts" list={PostList} />
        <Resource name="users" list={UserList} />
    </Admin>
    
);

export default App;