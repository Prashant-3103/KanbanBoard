
export const groupTickets = (tickets, grouping) => {
  switch (grouping) {
    case "status":
      return tickets.reduce((groups, ticket) => {
        groups[ticket.status] = [...(groups[ticket.status] || []), ticket];
        return groups;
      }, {});
    case "user":
      return tickets.reduce((groups, ticket) => {
        groups[ticket.userId] = [...(groups[ticket.userId] || []), ticket];
        return groups;
      }, {});
    case "priority":
      return tickets.reduce((groups, ticket) => {
        groups[ticket.priority] = [...(groups[ticket.priority] || []), ticket];
        return groups;
      }, {});
    default:
      return {};
  }
};

export const sortTickets = (tickets, ordering) => {
  if (ordering === "priority") {
    return [...tickets].sort((a, b) => b.priority - a.priority); // Descending priority
  } else if (ordering === "title") {
    return [...tickets].sort((a, b) => a.title.localeCompare(b.title)); // Alphabetical by title
  }
  return tickets;
};


