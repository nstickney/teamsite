import React, { Component } from 'react';
import { Timeline } from 'react-twitter-widgets';

class Twitter extends Component {
    render() {
        return (
            <div className={this.props.p.classNames} style={this.props.p.styles}>
                <h6 className="card-header bg-orange text-cosmic">Twitter</h6>
                <div className="card-body p-1">
                    <Timeline
                        dataSource={{
                            sourceType:"profile",
                            screenName:this.props.user
                        }}
                        options={{
                            username:this.props.user,
                            cards:"visible",
                            chrome:"noheader nofooter noborders transparent noscrollbar",
                            tweetLimit:"1"
                        }}
                    />
                </div>
            </div>
        )
    }
}

export default Twitter;
