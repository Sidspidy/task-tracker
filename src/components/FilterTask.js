import React from "react";

const FilterTask = ({
  filterStatus,
  sortOrder,
  onFilterChange,
  onSortChange,
}) => {
  return (
    <div className="d-flex justify-content-between mb-4">
      <select
        value={filterStatus}
        onChange={(e) => onFilterChange(e.target.value)}
        className="form-control w-25"
      >
        <option value="All">All</option>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <select
        value={sortOrder}
        onChange={(e) => onSortChange(e.target.value)}
        className="form-control w-25"
      >
        <option value="asc">Sort by Due Date (Ascending)</option>
        <option value="desc">Sort by Due Date (Descending)</option>
      </select>
    </div>
  );
};

export default FilterTask;
