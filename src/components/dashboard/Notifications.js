import React from 'react';
import moment from 'moment'

const Notifications = ({notifications}) => {
    
    return (
        <div className='section' >
            <div className='card z-depth-0' >
                <div className='card-content grey-text text-darken-3'>
                    <span className='card-title' >Notifications</span>
                    <ul className='notifications'>
                        {notifications && notifications.map(notification=> {
                            const time = moment(notification.time.toDate()).fromNow();
                            return (
                                <li key={notification.id} >
                                    <span className='pink-text lighten-3'>{notification.user} </span>
                                    <span>{notification.content}</span>
                                    <div className='grey-text note-date'>{time}</div>
                                </li>
                            )
                        }) }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Notifications;