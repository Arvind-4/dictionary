import React from 'react'
import './definition.css'

const Definition = ({
	word,
	meaning,
	category,

}) => {
	return (
		<div className="meaning">
			{meaning[0] && word && category === "en" && (
				<audio
				style={{ backgroundColor: "#fff", borderRadius: 10 }}
				src={meaning[0].phonetics[0] && meaning[0].phonetics[0].audio}
				controls >
					Your browser does not support the audio element.
				</audio>
			)}
      
			{word === "" ? (
	        <span className="subTitle">
	        	Start Typing...
	        </span>
	      	) : (
			        meaning.map((mean) =>
			          mean.meanings.map((item) =>
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
			                    <b>Synonyms :</b> {def.synonyms.map((s) => `${s}, `)}
			                  </span>
			                )}
			              </div>
			            ))
			          )
			        )
		      	)}
	    </div>
		)
}

export default Definition