const $networkList = document.querySelector('#network-list');

const getNetworkList = () => {
  fetch('/api/network')
    .then(response => response.json())
    .then(networkListArr => {
      networkListArr.forEach(printNetwork);
    })
    .catch(err => {
      console.log(err);
    });
};

const printNetwork = ({ _id, networkName, commentCount, createdBy, createdAt }) => {
  const networkCard = `
    <div class="col-12 col-lg-6 flex-row">
      <div class="card w-100 flex-column">
        <h3 class="card-header">${networkName}</h3>
        <div class="card-body flex-column col-auto">
          <h4 class="text-dark">By ${createdBy}</h4>
          <p>On ${createdAt}</p>
          <p>${commentCount} Comments</p>
        </div>
      </div>
    </div>
  `;

  $networkList.innerHTML += networkCard;
};

getNetworkList();
