import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src="https://i.ibb.co/v1VDC5M/PATRYK-JACHIMOWSKI-2020.jpg"
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <hr />
                            <p>JavaScript | Css | Html | React | Express | NodeJS | MongoDB</p>
            `               <div className="social-links">
                                <a href="https://www.facebook.com/patryk.jachimowski.73/" rel="noopener noreferrer" target="_blank"><i class="fab fa-facebook"></i></a>
                                <a href="https://github.com/pjachimowski" rel="noopener noreferrer" target="_blank"><i class="fab fa-github"></i></a>
                                <a href="https://www.linkedin.com/in/patryk-jachimowski/" rel="noopener noreferrer" target="_blank"><i class="fab fa-linkedin"></i></a>
                                <a href="https://dribbble.com/Jachimowski" rel="noopener noreferrer" target="_blank"><i class="fab fa-dribbble"></i></a>
                                <a href="https://www.instagram.com/pat.wanderlust/?hl=en" rel="noopener noreferrer" target="_blank"><i class="fab fa-instagram"></i></a>
                            </div>`
                        </div>
                    </Cell>
                </Grid>

            </div>
        );
    }
}

export default LandingPage;