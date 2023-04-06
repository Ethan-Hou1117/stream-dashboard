import {
  Card,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
  Title,
  Badge,
} from "@tremor/react";

const data = [
  {
    number: 1,
    name: "Viola Amherd",
    status: "active",
    adjuster_name: "blank",
    state: "pending",
    customer: "company"
  },
  {
    number: 1,
    name: "Simonetta Sommaruga",
    status: "active",
    adjuster_name: "blank",
    state: "pending",
    customer: "company"
  },
  {
    number: 1,
    name: "Alain Berset",
    status: "active",
    adjuster_name: "blank",
    state: "pending",
    customer: "company"
  },
  {
    number: 1,
    name: "Ignazio Cassis",
    status: "active",
    adjuster_name: "blank",
    state: "pending",
    customer: "company"
  },
  {
    number: 1,
    name: "Ueli Maurer",
    status: "active",
    adjuster_name: "blank",
    state: "pending",
    customer: "company"
  },
  {
    number: 1,
    name: "Guy Parmelin",
    status: "active",
    adjuster_name: "blank",
    state: "pending",
    customer: "company"
  },
  {
    number: 1,
    name: "Karin Keller-Sutter",
    status: "active",
    adjuster_name: "blank",
    state: "pending",
    customer: "company"
  },
];

export default () => (
  <Card>
    <Title style = {{color: '#7b6be9'}}>Claims</Title>
    <Table className="mt-5">
      <TableHead>
        <TableRow>
          <TableHeaderCell>Claim Number</TableHeaderCell>
          <TableHeaderCell>Claimant Name</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
          <TableHeaderCell>Carrier</TableHeaderCell>
          <TableHeaderCell>Adjuster Name</TableHeaderCell>
          <TableHeaderCell>State</TableHeaderCell>
          <TableHeaderCell>Customer</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.name}>
            <TableCell>
              <Text>{item.number}</Text>
            </TableCell>
            <TableCell>
              <Text>{item.name}</Text>
            </TableCell>
            <TableCell>
              <Text>{item.status}</Text>
            </TableCell>
            <TableCell>
              <Text>{item.status}</Text>
            </TableCell>
            <TableCell>
              <Text>{item.adjuster_name}</Text>
            </TableCell>
            <TableCell>
              <Text>{item.state}</Text>
            </TableCell>
            <TableCell>
              <Text>{item.customer}</Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Card>
);