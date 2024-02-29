const fetchData = async () => {
    try {
        let response = await fetch("https://658816af90fa4d3dabf972c4.mockapi.io/News")
        let data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error)
    }
}

export default fetchData;