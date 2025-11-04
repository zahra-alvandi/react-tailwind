import React, { Component } from 'react'
import './NavBar.css'

class User extends Component {

    constructor() {
        super()

        this.state = {
            notifications: [
                "اطلاعیه شماره 1",
                "ثبت نام در سایت",
                "تصحیح برگه ها",
                "طراحی پروژه",
                "خرید مایحتاج",
                "خرید ما یحتاج"
            ]
        }
    }

    render() {
        return (
            <nav className="navbar navbar-default fixed-top navbar-dark" id="mainNav">

                <div className="container">

                    <a className="text-white inline-block mt-4" href="/">Hello World</a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            {this.state.notifications.length > 0 && (
                                <li className="nav-item">
                                    <span className="badge badge-pill badge-warning">{this.state.notifications.length}</span>
                                    <a className="nav-link" href="/News/"> News <span className="sr-only">(current)</span></a>
                                </li>
                            )}

                        </ul>
                    </div>

                </div>
            </nav>
        )
    }
}

export default User