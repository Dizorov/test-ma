const getCars = async () => {
  const res = await fetch('http://sc.maximum.plus:8085')
  const data = await res.json();
  return data;
}

export default getCars;