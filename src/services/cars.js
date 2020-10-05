const API_URL = 'http://sc.maximum.plus:8085'

const getCars = async () => {
  const res = await fetch(API_URL);
  const data = await res.json();
  
  return data;
}

export default getCars;