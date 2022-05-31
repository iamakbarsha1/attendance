import React, { useState } from "react";
import { useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import { RiDeleteBin7Line } from "react-icons/ri";
import { HiOutlinePencil } from "react-icons/hi";
// import { SearchBar } from "../../../../shared/SearchBar";
// import { WhiteSearchBar } from "../../../../shared/WhiteSearchbar";
import Colors from "../../../src/Helpers/Colors";
import { useSelector } from "react-redux";

const columns = [
  {
    id: "sno",
    label: "S. No.",
    minWidth: 30,
    align: "center",
  },
  {
    id: "name",
    label: "Name",
    minWidth: 100,
    align: "center",
  },
  {
    id: "regNo",
    label: "Register Number",
    minWidth: 100,
    align: "center",
  },
  {
    id: "dept",
    label: "Dept",
    minWidth: 50,
    align: "center",
  },
  {
    id: "email",
    label: "Email",
    minWidth: 100,
    align: "center",
  },
  {
    id: "percentage",
    label: "Percentage",
    minWidth: 80,
    align: "center",
  },
  {
    id: "actions",
    label: "Actions",
    minWidth: 100,
    align: "center",
  },
];

const useStyles = makeStyles({
  Columns: {
    fontWeight: "bold",
    "& .snoCol": {
      fontWeight: "bold",
      backgroundColor: Colors.tableColumnBg,
      color: Colors.tableColumnText,
    },
    "& .nameCol": {
      fontWeight: "bold",
      backgroundColor: Colors.tableColumnBg,
      color: Colors.tableColumnText,
    },
    "& .regNoCol": {
      fontWeight: "bold",
      backgroundColor: Colors.tableColumnBg,
      color: Colors.tableColumnText,
    },
    "& .deptCol": {
      fontWeight: "bold",
      backgroundColor: Colors.tableColumnBg,
      color: Colors.tableColumnText,
    },
    "& .emailCol": {
      fontWeight: "bold",
      backgroundColor: Colors.tableColumnBg,
      color: Colors.tableColumnText,
    },
    "& .percentageCol": {
      fontWeight: "bold",
      backgroundColor: Colors.tableColumnBg,
      color: Colors.tableColumnText,
    },
    "& .actionCol": {
      fontWeight: "bold",
      backgroundColor: Colors.tableColumnBg,
      color: Colors.tableColumnText,
    },
  },
  Rows: {
    "& .sno ": {
      fontWeight: "bold",
      color: Colors.tableRowsText,
    },
    "& .name ": {
      fontWeight: "bold",
      color: Colors.tableRowsText,
    },
    "& .regNo ": {
      fontWeight: "bold",
      color: Colors.tableRowsText,
    },
    "& .dept ": {
      fontWeight: "bold",
      color: Colors.tableRowsText,
    },
    "& .email ": {
      fontWeight: "bold",
      color: Colors.tableRowsText,
    },
    "& .percentage ": {
      fontWeight: "bold",
      color: Colors.tableRowsText,
    },
    "& .action ": {
      fontWeight: 600,
      color: Colors.tableRowsText,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
      "& .present_absent": {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        "& .present": {
          margin: "0px 10px 0 0",
          padding: "5px 5px 5px 5px",
          border: `1px solid ${Colors.success}`,
          color: Colors.success,
          borderRadius: "5px",
          "&:active": {
            color: Colors.sidebarWhite,
            backgroundColor: Colors.success,
          },
        },
        "& .absent": {
          padding: "5px 5px 5px 5px",
          border: `1px solid ${Colors.error}`,
          color: Colors.error,
          borderRadius: "5px",
          "&:active": {
            color: Colors.sidebarWhite,
            backgroundColor: Colors.error,
          },
        },
      },
      "& .editIconCon": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& .editIcon": {
          fontSize: "20px",
          padding: "3px",
        },
      },
      "& .deleteIconCon": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& .deleteIcon": {
          fontSize: "20px",
          padding: "3px",
        },
      },
    },
  },
});

const StudentTable = ({
  takeAttendance,
  setTakeAttendance,
  onTakeAttendanceClick,
}) => {
  const room = useSelector((state) => state.room.value);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const Students = [
    {
      name: "Akbar Sha",
      regNo: "3035",
      dept: "BCA",
      email: "iamakbarsha1@gmail.com",
      percentage: "73%",
    },
    {
      name: "Akbar Sha",
      regNo: "3035",
      dept: "BCA",
      email: "iamakbarsha1@gmail.com",
      percentage: "73%",
    },
    {
      name: "Akbar Sha",
      regNo: "3035",
      dept: "BCA",
      email: "iamakbarsha1@gmail.com",
      percentage: "73%",
    },
    {
      name: "Akbar Sha",
      regNo: "3035",
      dept: "BCA",
      email: "iamakbarsha1@gmail.com",
      percentage: "73%",
    },
  ];

  const classes = useStyles();

  return (
    <main className="w-full mt-5">
      <section>
        {
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow className={classes.Columns}>
                    <TableCell
                      className="snoCol"
                      align={"center"}
                      style={{ minWidth: 30 }}
                    >
                      S. No.
                    </TableCell>
                    <TableCell
                      className="nameCol"
                      align={"center"}
                      style={{ minWidth: 120 }}
                    >
                      Name
                    </TableCell>
                    <TableCell
                      className="regNoCol"
                      align={"center"}
                      style={{ minWidth: 100 }}
                    >
                      Register Number
                    </TableCell>
                    <TableCell
                      className="deptCol"
                      align={"center"}
                      style={{ minWidth: 50 }}
                    >
                      Dept
                    </TableCell>
                    <TableCell
                      className="emailCol"
                      align={"center"}
                      style={{ minWidth: 100 }}
                    >
                      Email
                    </TableCell>
                    {takeAttendance ? (
                      <TableCell
                        className="percentageCol"
                        align={"center"}
                        style={{ minWidth: 80 }}
                      >
                        Percentage
                      </TableCell>
                    ) : (
                      <TableCell
                        className="actionCol"
                        align={"center"}
                        style={{ minWidth: 100 }}
                      >
                        Action
                      </TableCell>
                    )}
                    {/* {columns.map((column) => {
                      return (
                      );
                    })} */}
                  </TableRow>
                  {/* {columns.map((column) => (
                      <TableCell
                        className="columns"
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))} */}
                </TableHead>
                <TableBody>
                  {Students.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  ).map((student, index) => {
                    return (
                      <TableRow
                        hover
                        key={student.units}
                        className={classes.Rows}
                      >
                        <TableCell className="sno" align={"center"}>
                          {index + 1}
                        </TableCell>
                        <TableCell className="name" align={"center"}>
                          {student.name}
                        </TableCell>
                        <TableCell className="regNo" align={"center"}>
                          {student.regNo}
                        </TableCell>
                        <TableCell className="dept" align={"center"}>
                          {student.dept}
                        </TableCell>
                        <TableCell className="email" align={"center"}>
                          {student.email}
                        </TableCell>
                        {takeAttendance ? (
                          <TableCell className="percentage" align={"center"}>
                            {student.percentage}
                          </TableCell>
                        ) : (
                          <TableCell align={"center"} className="action">
                            <section className="present_absent">
                              <div className="present">
                                <label for="present">Present</label>
                              </div>
                              <input type={"radio"} id={"present"} />
                              <div className="absent">
                                <label for="absent">Absent</label>
                              </div>
                              <input type={"radio"} id={"absent"} />
                            </section>
                            {/* <div className="editIconCon">
                              <HiOutlinePencil className="editIcon" />
                            </div>
                            <div className="deleteIconCon">
                              <RiDeleteBin7Line className="deleteIcon" />
                            </div> */}
                          </TableCell>
                        )}
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, 100]}
              component="div"
              count={Students.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        }
      </section>
    </main>
  );
};

export default StudentTable;
