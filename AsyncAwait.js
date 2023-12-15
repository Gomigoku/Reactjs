function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data Fetched');
    }, 2000);
  });
}

async function fetchDataWithAsyncAwait() {
  try {
    const result = await fetchData();
    console.log("Data fetched successfully:", result);
  }
  catch(error) {
    console.log("an error occured while fetching data");
  }
}
