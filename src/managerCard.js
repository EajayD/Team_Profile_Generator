function managerCard(name, role, id, email, officeNumber) {
return `
<div class="card text-white bg-danger mb-3 p-4" style="max-width: 18rem;">
  <div class="card-header"><h3>${name}</h3></div>
  <div class="card-body bg-dark">
    <h5 class="card-title">${role}</h5>
    <p class="card-text">ID: ${id}</p><br/>
    <p class="card-text">Email: <a href = "${email}">${email}</a></p><br/>
    <p class="card-text">Office Number: ${officeNumber}</p><br/>
  </div>
</div>
`
}

module.exports = managerCard;