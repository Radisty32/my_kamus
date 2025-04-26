const fetchDictionaryData = async ({ word }: { word?: string }) => {
  try {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    if(!response.ok) {
        throw new Error(`Error: ${response.status}`)
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchDictionaryData;
