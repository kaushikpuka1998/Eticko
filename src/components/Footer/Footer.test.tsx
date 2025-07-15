import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer';
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "../../dev";

it('It should mount', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DevSupport ComponentPreviews={ComponentPreviews}
                                useInitialHook={useInitial}
    >
        <Footer/>
    </DevSupport>, div);
    ReactDOM.unmountComponentAtNode(div);
});