import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Patryk Jachimowski</h2>
                        <img
                            src="https://i.ibb.co/v1VDC5M/PATRYK-JACHIMOWSKI-2020.jpg"
                            alt="avatar"
                            style={{ height: '250px' }}
                        />
                        <p
                            style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}
                        >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact me:</h2>
                        <hr />
                        <p>

                        </p>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Contact;