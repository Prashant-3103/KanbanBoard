import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import KanbanBoard from "./components/KanbanBoard/KanbanBoard";
import axios from "axios";
import "./App.css";

const API_URL = "https://api.quicksell.co/v1/internal/frontend-assignment";

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState("status"); // Default grouping
  const [ordering, setOrdering] = useState("priority"); // Default ordering

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setTickets(response.data.tickets);
        setUsers(response.data.users);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Load saved preferences from localStorage
    const savedGrouping = localStorage.getItem("grouping");
    const savedOrdering = localStorage.getItem("ordering");
    if (savedGrouping) setGrouping(savedGrouping);
    if (savedOrdering) setOrdering(savedOrdering);

    fetchData();
  }, []);

  useEffect(() => {
    // Save preferences to localStorage
    localStorage.setItem("grouping", grouping);
    localStorage.setItem("ordering", ordering);
  }, [grouping, ordering]);

  return (
    <div className="app">
      <Header
        grouping={grouping}
        setGrouping={setGrouping}
        ordering={ordering}
        setOrdering={setOrdering}
      />
      <KanbanBoard tickets={tickets} users={users} grouping={grouping} setGrouping={setGrouping} setOrdering={setOrdering}  ordering={ordering} />
    </div>
  );
};

export default App;
