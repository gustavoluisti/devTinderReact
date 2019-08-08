import React from 'react';

import logo from '../assets/logo.svg';
import dislike from '../assets/dislike.svg';
import like from '../assets/like.svg';

import './Main.css';

export default function Main({ match }) {
    return (
        <div className="main-container">
            <img src={logo} alt="TinDev" />
            <ul>
                <li>
                    <img src="https://avatars3.githubusercontent.com/u/5570231?v=4" alt="" />
                    <footer>
                        <strong>Luis Gustavo</strong>
                        <p>Programador</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike" />
                        </button>
                        <button type="button">
                            <img src={like} alt="Like" />
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://avatars3.githubusercontent.com/u/5570231?v=4" alt="" />
                    <footer>
                        <strong>Luis Gustavo</strong>
                        <p>Programador</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike" />
                        </button>
                        <button type="button">
                            <img src={like} alt="Like" />
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://avatars3.githubusercontent.com/u/5570231?v=4" alt="" />
                    <footer>
                        <strong>Luis Gustavo</strong>
                        <p>Programador</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike" />
                        </button>
                        <button type="button">
                            <img src={like} alt="Like" />
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://avatars3.githubusercontent.com/u/5570231?v=4" alt="" />
                    <footer>
                        <strong>Luis Gustavo</strong>
                        <p>Programador</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike" />
                        </button>
                        <button type="button">
                            <img src={like} alt="Like" />
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    )
}