const fetchData = async (searchTerm) => {
  const response = await axios.get(" http://www.omdbapi.com/", {
    params: {
      apikey: "1fce14d7",
      s: searchTerm,
    },
  });
  console.log(response.data);
};

let timeoutId;
const input = document.querySelector("input");
const onInput = (event) => {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(() => {
    fetchData(event.target.value);
  }, 500);
};
input.addEventListener("input", onInput);
