import { useEffect, useState } from "react";
import { Container } from "@material-ui/core";

import Header from "src/components/header/Header";
import Definition from "src/components/definition/Definition";
import dictionaryApi from "src/api/data";
import { DictionaryArray } from "src/interface/DictionaryInterface";

function App() {
  const [dictionary, setDictionary] = useState<DictionaryArray>();
  const [word, setWord] = useState<string>("");
  const [category, setCategory] = useState<string>("en");

  useEffect(() => {
    try {
      dictionaryApi(word, category).then((data) => setDictionary(data));
    } catch (error) {
      console.log(error);
    }
  }, [word, category]);

  return (
    <div
      className="App"
      style={{ height: "100vh", backgroundColor: "#282c34", color: "white" }}
    >
      <Container
        maxWidth="md"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          justifyContent: "space-evenly",
        }}
      >
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
          setDictionary={setDictionary}
        />

        {dictionary && (
          <Definition word={word} dictionary={dictionary} category={category} />
        )}
      </Container>
    </div>
  );
}

export default App;
