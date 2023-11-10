const dictionaryApi = async (word: string, category: string) => {
  try {
    if (word === "") {
      return null;
    }
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}/`,
    );
    if (response.ok) {
      return await response.json();
    } else {
      return null;
    }
  } catch (error) {
    console.log("The Error is ", error);
  }
  return null;
};

export default dictionaryApi;
