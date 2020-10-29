import * as React from "react";
import { Admin } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider(`${process.env.REACT_APP_API_URL}`);

const App = () => <Admin dataProvider={dataProvider} />;

export default App;