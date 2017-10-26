import React, { Component } from 'react';

var createClass = require('create-react-class')

class Header extends Component {
    render() {
        var AppLogo = createClass({
            render() {
                var imgSize = "32px"
                return (
                    <a class="navbar-brand font-weight-bold text-cosmic" href="index.html">
                        <img className="align-top d-inline-block mx-2" src="./img/avatar.svg" height={imgSize} width={imgSize} alt="Stick" />
                        <h4 className="d-inline-block">{this.props.apptitle}</h4>
                    </a>
                );
            }
        });

        var FollowButtons = createClass({
            render() {
                var imgSize = "24px";
                var classNames = "align-top m-2"
                var ghLink = "https://github.com/" + this.props.user;
                var tLink = "https://twitter.com/" + this.props.user;
                return (
                    <div className="nav">
                        <a href={ghLink} alt="Follow {this.props.user}">
                            <img src="./img/github.ico" height={imgSize} width={imgSize} alt="GitHub" className={classNames} />
                        </a>
                        <a href={tLink} alt="Follow {this.props.user}">
                            <img src="./img/twitter.ico"  height={imgSize} width={imgSize} alt="Twitter" className={classNames} />
                        </a>
                    </div>
                )
            }
        })

        return (
            <div className="navbar bg-wool sticky-top text-cosmic">
                <AppLogo {...this.props} />
                <FollowButtons user={this.props.author} />
            </div>
        );
    }
}

export default Header;
