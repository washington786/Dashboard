import React from 'react';
import '../../styles/SideBar.css';

export default function SideBar() {
  return (
    <div className="side-bar-container d-flex">
        <div className="bar-con bg-warning">
            <ul className="side-bar-list w-100">

                <li className="side-bar-list-item">
                    <i className="bi bi-house-door-fill icon"/>
                    <h5 className="name">Home</h5>
                </li>
                <li className="side-bar-list-item">
                    <i className="bi bi-rss-fill icon"/>
                    <h5 className="name">Feed</h5>
                </li>
                <li className="side-bar-list-item">
                    <i className="bi bi-chat-heart icon"/>
                    <h5 className="name">Chats</h5>
                </li>
                <li className="side-bar-list-item">
                    <i className="bi bi-briefcase-fill icon"/>
                    <h5 className="name">Jobs</h5>
                </li>
                <li className="side-bar-list-item">
                    <i className="bi bi-question-circle-fill icon"/>
                    <h5 className="name">Questions</h5>
                </li>
                <li className="side-bar-list-item">
                    <i className="bi bi-book icon"/>
                    <h5 className="name">Course</h5>
                </li>
                <li className="side-bar-list-item">
                    <i className="bi bi-file-earmark-play-fill icon"/>
                    <h5 className="name">Videos</h5>
                </li>
                <li className="side-bar-list-item">
                    <i className="bi bi-bookmark-check-fill icon"/>
                    <h5 className="name">BookMarks</h5>
                </li>
                <li className="side-bar-list-item">
                    <i className="bi bi-calendar-event-fill icon"/>
                    <h5 className="name">Events</h5>
                </li>
            </ul>
        </div>
    </div>
  )
}
