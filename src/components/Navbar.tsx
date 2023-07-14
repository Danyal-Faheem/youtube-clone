import { ChangeEvent, useState } from "react";
import { Button, Container, Form, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

interface navigationBar {
  handleSubmit: (query: string) => void;
}

export const NavigationBar = ({ handleSubmit }: navigationBar) => {
  //Our main variable
  const [query, setQuery] = useState<string>("");

  //Function that will just set the value of the query variable on input change
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    console.log("into the handle key down function");
    if (event.key === "Enter") {
      handleSubmit(query);
    }
  };

  return (
    // Utilizing simple bootstrap navbar here with a searchbox inside it
    <Navbar bg="dark" sticky={"top"}>
      <Navbar.Brand href="/">
        <img src={process.env.PUBLIC_URL + "/logo.png"} alt="logo" />
        YouTube
      </Navbar.Brand>
      <Container>
        <Form.Control
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={query}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        {/* OnClick, the props passed function will be called as a callback */}
        <Button onClick={() => handleSubmit(query)}>
          <FontAwesomeIcon icon={faSearch} />
        </Button>
      </Container>
    </Navbar>
  );
};
