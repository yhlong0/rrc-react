import React from 'react';
import TextInputBEM from 'ps-react/TextInputBEM';

/** Required TextBox with error */
export default class ExampleError extends React.Component {
    render() {
        return (
            <TextInputBEM
                htmlId="Example-optional"
                label="First Name"
                name="fistname"
                onChange={() => { }}
                required
                error="First name is required."
            />
        )
    }
}
