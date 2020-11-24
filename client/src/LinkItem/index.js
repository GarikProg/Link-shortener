import React from "react";
import {TableCell, TableRow} from "@material-ui/core"

export default function LinkItem(props) {
  const { shortLink, longLink, counter } = props;
  return (
     <TableRow>
      <TableCell>{shortLink}</TableCell>
      <TableCell>{longLink}</TableCell>
      <TableCell>{counter}</TableCell>
    </TableRow>
  );
}
