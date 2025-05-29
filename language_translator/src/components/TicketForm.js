import React, { useState } from "react";

export default function TicketForm() {
  const [ticket, setTicket] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("1");

  const priorityLabels = {
    1: "Low",
    2: "Medium",
    3: "High",
  };

  const clearForm = () => {
    setTicket("");
    setDescription("");
    setPriority("1");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const ticketData = {
      id: new Date().toISOString(),
      ticket,
      description,
      priority,
    };
    clearForm();
  };

  return (
    <form onSubmit={handleSubmit} className="ticket-form ">
      <div>
        <label className="label">Ticket</label>
        <input
          type="text"
          value={ticket}
          className="form-intput"
          onChange={(e) => setTicket(e.target.value)}
        ></input>
      </div>
      <div>
        <label className="label">Description</label>
        <textarea
          value={description}
          className="form-intput text-black"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <fieldset>
        <legend className="label">Priority</legend>

        {Object.entries(priorityLabels).map(([value, label]) => (
          <label key={value} className="radio-label">
            <input
              type="radio"
              value={value}
              checked={priority === value}
              className="priority-input "
              onChange={(e) => setPriority(e.target.value)}
            />
            {label}
          </label>
        ))}
      </fieldset>

      <button type="submit" className="button">
        Submit
      </button>
    </form>
  );
}
