const handleNetworkSubmit = event => {
  event.preventDefault();

  const networkName = $networkForm.querySelector('#network-name').value;
  const createdBy = $networkForm.querySelector('#created-by').value;

  const formData = { networkName, createdBy };

  fetch('/api/network', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
    .then(response => response.json())
    .then(postResponse => {
      console.log(postResponse);
    })
    .catch(err => {
      console.log(err);
      saveRecord(formData);
      // DO INDEXED DB STUFF HERE
    });
};

$networkForm.addEventListener('submit', handleNetwrokSubmit);
