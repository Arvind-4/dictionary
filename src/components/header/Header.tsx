import {
  TextField,
  createTheme,
  ThemeProvider,
  MenuItem,
} from "@material-ui/core";
import { debounce } from "lodash";

import categories from "src/components/header/data";
import { DictionaryArray } from "src/interface/DictionaryInterface";
import "src/components/header/header.css";

const Header = ({
  category,
  setCategory,
  word,
  setWord,
  setDictionary,
}: {
  category: string;
  setCategory: (category: string) => void;
  word: string;
  setWord: (word: string) => void;
  setDictionary: (dictionary: DictionaryArray) => void;
}) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  const handleChange = (e: any) => {
    setCategory(e.target.value);
    setWord("");
    setDictionary([]);
  };

  const handelText = debounce((text: string) => {
    setWord(text);
  }, 500);

  return (
    <div className="header">
      <span className="title"> {word ? word : "Dictionary"} </span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="search"
            id="filled-basic"
            // value={word}
            label="Search Word ... "
            onChange={(e) => handelText(e.target.value)}
          ></TextField>
          <TextField
            className="select"
            select
            label="Select Language"
            value={category}
            onChange={(e) => handleChange(e)}
          >
            {categories.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
