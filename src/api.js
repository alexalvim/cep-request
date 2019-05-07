
export const getInfoByCep = (cep) => {
  return fetch(`http://localhost:3001/getInfoByCep/${cep}`,
          { method: 'GET',
            mode: 'cors',
            cache: 'default' })
      .then(function(response) {
        return response.json();
      })
}