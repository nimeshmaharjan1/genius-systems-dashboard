import usePagination from "@mui/material/usePagination/usePagination";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  useFilters,
  useSortBy,
  useTable,
} from "react-table/dist/react-table.development";
import "./Datatable.scss";
const Datatable = ({ columns, data }) => {
  const [filterInput, setFilterInput] = useState("");
  const handleFilterChange = (e) => {
    const value = e.target.value || undefined;
    setFilter("first_name", value);
    setFilterInput(value);
  };
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page, // fetch the current page
    rows,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    prepareRow,
    setFilter,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 2 },
    },
    useFilters,
    useSortBy,
    usePagination
  );
  const styles = {
    table: {
      width: "100%",
      borderRadius: "0.8rem",
      overflow: "hidden",
    },
    thead: {
      backgroundColor: "#2d385c",
    },
    th: {
      padding: "1rem",
      border: "dotted 1px black",
      cursor: "pointer",
    },
    td: {
      padding: "1rem",
      border: "dotted 1px black",
      cursor: "pointer",
    },
  };
  return (
    <>
      <div className="search-section">
        <input
          className="form__field"
          placeholder="Search Here..."
          value={filterInput}
          onChange={handleFilterChange}
        />
      </div>
      <table {...getTableProps()} style={styles.table}>
        <thead style={styles.thead}>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  style={styles.th}
                >
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()} style={styles.td}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination">
        <button
          className="pagination-btn"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          Previous page{" "}
        </button>
        <button
          className="pagination-btn"
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          Next page{" "}
        </button>
      </div>
    </>
  );
};

export default Datatable;
