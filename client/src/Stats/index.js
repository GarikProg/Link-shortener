import React, { useState, useEffect } from "react";
import LinkItem from "../LinkItem";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default function Stats() {
  const [links, setLinks] = useState([]);
  const [fetchError, setFetchError] = useState(false);

  useEffect(
    () =>
      (async () => {
        try {
        const response = await fetch("/links");
        if(response.ok) {
          const links = await response.json(); 
          setLinks(links)
          setFetchError(false)
        } else {
          setFetchError(true)
        }
      } catch(error) {
        setFetchError(true)   
        }    
      })(),
    []
  );

  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  const classes = useStyles();

  return (
    <Table className={classes.table} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell> id короткой ссылки </TableCell>
          <TableCell> Оригинальный адрес </TableCell>
          <TableCell> Количество переходов по короткой ссылке </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {links &&
          links.map((el) => {
            return (
              <LinkItem
                key={el.shortLink}
                id={el.id}
                shortLink={el.shortLink}
                longLink={el.longLink}
                counter={el.counter}
              />
            );
          })}
      </TableBody>
        <div>{fetchError ? 'Возникла ошибка при запросе данных' : ''}</div>
    </Table>
    
  );
}
