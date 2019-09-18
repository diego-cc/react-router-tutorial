import React from 'react';
import {BaseLayout} from "./BaseLayout";
import {BrowserRouter} from 'react-router-dom';

export class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <BaseLayout />
            </BrowserRouter>
        )
    }
}
