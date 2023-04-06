import {
    Table,
    TableHead,
    TableRow,
    TableHeaderCell,
    TableBody,
    TableCell,
    Text
  } from '@tremor/react';
  import PopupImage from './popupimage';
  
  interface User {
    id: number;
    claim_number: string;
    update_text: string;
    status: string;
  }
  
  export default async function UsersTable({ users }: { users: User[] }) {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Claim Number</TableHeaderCell>
            <TableHeaderCell>Update</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell></TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.claim_number}</TableCell>
              <TableCell>
                <Text>{user.update_text}</Text>
              </TableCell>
              <TableCell>
                <Text>{user.status}</Text>
              </TableCell>
              <TableCell>
                <PopupImage src={"/images/upper-right-arrow-square-button-outlined-symbol.png"} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
  