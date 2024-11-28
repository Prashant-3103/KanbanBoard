import React from "react";
import "./Card.css";

const Card = ({ ticket, users, grouping }) => {
  // Find the user associated with this ticket
  const user = users?.find((u) => u.id === ticket.userId) || null;
// console.log(users);

const emptyImageSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#ccc"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="8" r="4"></circle>
    <path d="M16 20c-1.33-2-4-3-4-3s-2.67 1-4 3"></path>
    <circle cx="12" cy="12" r="10"></circle>
  </svg>
);

  // SVG paths for status icons
  const statusIcons = {
    "Todo": (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z" stroke="#B8B8B8" strokeWidth="2" />
      </svg>
    ),
    "In progress": (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z" fill="white" stroke="#F2BE00" strokeWidth="2" />
        <path d="M9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9C8.10457 9 9 8.10457 9 7Z" stroke="#F2BE00" strokeWidth="4" />
      </svg>
    ),
    "Backlog": (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z" stroke="#95999F" strokeWidth="2" strokeDasharray="1.4 1.74" />
      </svg>
    ),
  };

  // SVG paths for priority icons
  const priorityIcons = {
    0: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.9" d="M4.5 7.34375H2.75C2.50838 7.34375 2.3125 7.53963 2.3125 7.78125V8.21875C2.3125 8.46037 2.50838 8.65625 2.75 8.65625H4.5C4.74162 8.65625 4.9375 8.46037 4.9375 8.21875V7.78125C4.9375 7.53963 4.74162 7.34375 4.5 7.34375Z" fill="#5E5E5F" />
        <path opacity="0.9" d="M8.875 7.34375H7.125C6.88338 7.34375 6.6875 7.53963 6.6875 7.78125V8.21875C6.6875 8.46037 6.88338 8.65625 7.125 8.65625H8.875C9.11662 8.65625 9.3125 8.46037 9.3125 8.21875V7.78125C9.3125 7.53963 9.11662 7.34375 8.875 7.34375Z" fill="#5E5E5F" />
        <path opacity="0.9" d="M13.25 7.34375H11.5C11.2584 7.34375 11.0625 7.53963 11.0625 7.78125V8.21875C11.0625 8.46037 11.2584 8.65625 11.5 8.65625H13.25C13.4916 8.65625 13.6875 8.46037 13.6875 8.21875V7.78125C13.6875 7.53963 13.4916 7.34375 13.25 7.34375Z" fill="#5E5E5F" />
      </svg>
    ),
    1: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.5 8H2.5C1.94772 8 1.5 8.44772 1.5 9V13C1.5 13.5523 1.94772 14 2.5 14H3.5C4.05228 14 4.5 13.5523 4.5 13V9C4.5 8.44772 4.05228 8 3.5 8Z" fill="#5C5C5E" />
        <path d="M8.5 5H7.5C6.94772 5 6.5 5.44772 6.5 6V13C6.5 13.5523 6.94772 14 7.5 14H8.5C9.05228 14 9.5 13.5523 9.5 13V6C9.5 5.44772 9.05228 5 8.5 5Z" fill="#5C5C5E" fillOpacity="0.4" />
        <path d="M13.5 2H12.5C11.9477 2 11.5 2.44772 11.5 3V13C11.5 13.5523 11.9477 14 12.5 14H13.5C14.0523 14 14.5 13.5523 14.5 13V3C14.5 2.44772 14.0523 2 13.5 2Z" fill="#5C5C5E" fillOpacity="0.4" />
      </svg>
    ),
    2:(
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.5 8H2.5C1.94772 8 1.5 8.44772 1.5 9V13C1.5 13.5523 1.94772 14 2.5 14H3.5C4.05228 14 4.5 13.5523 4.5 13V9C4.5 8.44772 4.05228 8 3.5 8Z" fill="#5C5C5E"/>
      <path d="M8.5 5H7.5C6.94772 5 6.5 5.44772 6.5 6V13C6.5 13.5523 6.94772 14 7.5 14H8.5C9.05228 14 9.5 13.5523 9.5 13V6C9.5 5.44772 9.05228 5 8.5 5Z" fill="#5C5C5E"/>
      <path d="M13.5 2H12.5C11.9477 2 11.5 2.44772 11.5 3V13C11.5 13.5523 11.9477 14 12.5 14H13.5C14.0523 14 14.5 13.5523 14.5 13V3C14.5 2.44772 14.0523 2 13.5 2Z" fill="#5C5C5E" fill-opacity="0.4"/>
      </svg>
    ),
    3:(
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.5 8H2.5C1.94772 8 1.5 8.44772 1.5 9V13C1.5 13.5523 1.94772 14 2.5 14H3.5C4.05228 14 4.5 13.5523 4.5 13V9C4.5 8.44772 4.05228 8 3.5 8Z" fill="#5C5C5E"/>
      <path d="M8.5 5H7.5C6.94772 5 6.5 5.44772 6.5 6V13C6.5 13.5523 6.94772 14 7.5 14H8.5C9.05228 14 9.5 13.5523 9.5 13V6C9.5 5.44772 9.05228 5 8.5 5Z" fill="#5C5C5E"/>
      <path d="M13.5 2H12.5C11.9477 2 11.5 2.44772 11.5 3V13C11.5 13.5523 11.9477 14 12.5 14H13.5C14.0523 14 14.5 13.5523 14.5 13V3C14.5 2.44772 14.0523 2 13.5 2Z" fill="#5C5C5E"/>
      </svg>
    ),
    4:(
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 1C1.91067 1 1 1.91067 1 3V13C1 14.0893 1.91067 15 3 15H13C14.0893 15 15 14.0893 15 13V3C15 1.91067 14.0893 1 13 1H3ZM7 4H9L8.75391 8.99836H7.25L7 4ZM9 11C9 11.5523 8.55228 12 8 12C7.44772 12 7 11.5523 7 11C7 10.4477 7.44772 10 8 10C8.55228 10 9 10.4477 9 11Z" fill="#FB773F"/>
      </svg>
    )
  };  return (
    <div className="card">
      <div className="card-header">
        <span className="ticket-id">{ticket.id}</span>
        {user ? (
              user.imageUrl ? (
                <img
                  className="user-avatar"
                  src={user.imageUrl}
                  alt={user.name}
                />
              ) : (
                <div className="user-avatar-fallback">{emptyImageSvg}</div>
              )
            ) : (
              <div className="user-avatar-fallback">{emptyImageSvg}</div>
            )}
      </div>
      <div className="card-body">
        <div className="card-title">
          {/* Conditionally add status icon for user or priority grouping */}
          {grouping !== "status" && statusIcons[ticket.status]}
          <span>{ticket.title}</span>
        </div>
      </div>
      <div className="card-footer">
        {/* Conditionally add priority icon for user or status grouping */}
        {grouping !== "priority" && priorityIcons[ticket.priority]}
        <div className="tag-container">
          <svg
            className="tag-icon"
            width="16"
            height="16"

            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="8" cy="8" r="8" fill="#c4c4c4" />
          </svg>
          <span className="tag-text">{ticket.tag.join(", ")}</span>
        </div>
        <span className="more-options">...</span>
      </div>
    </div>
  );
};

export default Card;
