import {
  DictionaryArray,
  DictionaryInterface,
} from "src/interface/DictionaryInterface";
import "src/components/definition/definition.css";

const Definition = ({
  word,
  dictionary,
  category,
}: {
  word: string;
  dictionary: DictionaryArray;
  category: string;
}) => {
  return (
    <div className="meaning">
      {dictionary[0] && word && category === "en" && (
        <audio
          style={{ backgroundColor: "#fff", borderRadius: 10 }}
          src={dictionary[0].phonetics[0] && dictionary[0].phonetics[0].audio}
          controls
        >
          Your browser does not support the audio element.
        </audio>
      )}

      {word === "" ? (
        <span className="subTitle">Start Typing...</span>
      ) : (
        dictionary.map((dict: DictionaryInterface) =>
          dict.meanings.map((item) =>
            item.definitions.map((def) => (
              <div
                className="singleMeaning"
                // style={{
                //   backgroundColor: LightTheme ? "#3b5360" : "white",
                //   color: LightTheme ? "white" : "black",
                // }}
              >
                <b>{def.definition}</b>
                <hr style={{ backgroundColor: "black", width: "100%" }} />
                {def.example && (
                  <span>
                    <b>Example :</b> {def.example}
                  </span>
                )}
                {def.synonyms && (
                  <span>
                    <b>Synonyms :</b> {def.synonyms.map((s: any) => `${s}, `)}
                  </span>
                )}
              </div>
            )),
          ),
        )
      )}
    </div>
  );
};

export default Definition;
