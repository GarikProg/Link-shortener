import React, { useState } from "react";
import { Input, Button, ListItem, List } from "@material-ui/core";

function Form() {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [fetchError, setFetchError] = useState("");
  const [outPut, setOutput] = useState(null);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const linkRegExp = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
    if (input.match(linkRegExp)) {
      try {
        const response = await fetch("/links", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ longLink: input }),
        });
        if (response.status === 200) {
          const newLink = await response.json();
        setOutput(newLink);
        setError(false);
        setFetchError(false);
        } else {
          setFetchError(true);
          setError(false);
        }       
      } catch (error) {
        setFetchError(true);
      }
    } else {
      setOutput("");
      setError(true);
    }
  };

  return (
    <>
      <h2>Оригинальный адрес:</h2>
      <form
        onSubmit={(event) => handleSubmit(event)}
        action="/links"
        method="post"
      >
        <Input
          placeholder="Введите оригинальный адрес"
          fullWidth="true"
          autoFocus="true"
          onChange={(event) => handleChange(event)}
          name="longLink"
          type="text"
        />
        <div style={{ color: "red", margin: "10px" }}>
          {error
            ? "Ссылка должна содержать протокол (http://, https://), включать буквы и цифры а также домеенное имя (например .com)"
            : ""}
        </div>
        <div style={{ color: "red", margin: "10px" }}>
        {fetchError ? 'Возникла ошибка при обращению к серверу' : ''}
        </div>
        <Button
          variant="contained"
          type="submit"
          style={{ color: "blue", margin: "10px" }}
        >
          Сгенерировать ссылку
        </Button>
      </form>
      {outPut ? (
        <List>
          <ListItem button>Id Короткой ссылки: http://localhost:3001/{outPut.shortLink}</ListItem>
          <ListItem>Оригинальный адрес: {outPut.longLink}</ListItem>
          <ListItem>
            Количество переходов по короткой ссылке - {outPut.counter}
          </ListItem>
        </List>
      ) : (
        ""
      )}
    </>
  );
}

export default Form;
