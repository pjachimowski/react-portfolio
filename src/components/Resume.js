import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell className="resume-left-col" col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img
                                src="https://i.ibb.co/v1VDC5M/PATRYK-JACHIMOWSKI-2020.jpg"
                                alt="avatar"
                                style={{ height: '200px' }} />
                        </div>
                        <h2 style={{ paddingTop: '2em' }}> Patryk Jachimowski</h2>
                        <h4 style={{ color: 'grey' }}> Full Stack Developer</h4>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <h5>Address:</h5>
                        <p>Vechtstraat 136 1079JR Amsterdam, the Netherlands</p>
                        <h5>Phone:</h5>
                        <p>0031 6 15535792</p>
                        <h5>Email:</h5>
                        <p>p.jachimowski89@gmail.com</p>
                        <h5>Web:</h5>
                        <p>https://jachimowski89.wixsite.com/patryk-jachimowski</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />

                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education:</h2>

                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Resume;