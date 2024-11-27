import React from "react";
import "./KanbanBoard.css";
import KanbanColumn from "../KanbanColumn/KanbanColumn";
import { groupTickets } from "../../utils/dataUtils";

const KanbanBoard = ({ tickets, users, grouping, ordering }) => {
  const groupedTickets = groupTickets(tickets, grouping);

  return (
    <main className="kanban-board">
      {Object.entries(groupedTickets).map(([groupKey, groupTickets]) => (
        <KanbanColumn
          key={groupKey}
          groupKey={groupKey}
          tickets={groupTickets}
          grouping={grouping}
          users={users}
        />
      ))}
    </main>
  );
};

export default KanbanBoard;
