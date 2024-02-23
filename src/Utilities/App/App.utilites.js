export const fetchData = async () => { 
    try {
        const response = await fetch("../public/data.json");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching the file', error);
    }
};