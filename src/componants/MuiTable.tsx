import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
export const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
      <Table aria-label="simple-table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td,&:last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
const tableData = [
  {
    id: 1,
    first_name: "Veronike",
    last_name: "Agiolfinger",
    email: "vagiolfinger0@geocities.jp",
    gender: "Female",
    ip_address: "36.14.146.46",
  },
  {
    id: 2,
    first_name: "Toddie",
    last_name: "Fenn",
    email: "tfenn1@tinypic.com",
    gender: "Male",
    ip_address: "141.42.247.62",
  },
  {
    id: 3,
    first_name: "Terra",
    last_name: "Knoton",
    email: "tknoton2@globo.com",
    gender: "Female",
    ip_address: "131.109.149.211",
  },
  {
    id: 4,
    first_name: "Morna",
    last_name: "Tomovic",
    email: "mtomovic3@exblog.jp",
    gender: "Female",
    ip_address: "17.0.213.125",
  },
  {
    id: 5,
    first_name: "Holly",
    last_name: "Allpress",
    email: "hallpress4@cam.ac.uk",
    gender: "Male",
    ip_address: "97.51.243.126",
  },
  {
    id: 6,
    first_name: "Linda",
    last_name: "Baccas",
    email: "lbaccas5@foxnews.com",
    gender: "Female",
    ip_address: "200.40.11.46",
  },
  {
    id: 7,
    first_name: "Bailey",
    last_name: "Damiral",
    email: "bdamiral6@msu.edu",
    gender: "Male",
    ip_address: "121.148.109.193",
  },
  {
    id: 8,
    first_name: "Les",
    last_name: "Bickle",
    email: "lbickle7@clickbank.net",
    gender: "Male",
    ip_address: "109.70.181.13",
  },
  {
    id: 9,
    first_name: "Lois",
    last_name: "Lakenden",
    email: "llakenden8@amazon.com",
    gender: "Female",
    ip_address: "226.16.176.145",
  },
  {
    id: 10,
    first_name: "Jorge",
    last_name: "Lammenga",
    email: "jlammenga9@themeforest.net",
    gender: "Male",
    ip_address: "151.116.17.179",
  },
];
