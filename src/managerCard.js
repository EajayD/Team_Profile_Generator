function managerCard(name, role, id, email, officeNumber) {
return `
<div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
  <div class="card-header">${name}</div>
  <div class="card-body">
    <h5 class="card-title">Role: ${role}</h5>
    <p class="card-text">ID: ${id}</p><br/>
    <p class="card-text">Email: <a href = "${email}">${email}</a></p><br/>
    <p class="card-text">${officeNumber}</p><br/>
  </div>
</div>
`
}

module.exports = managerCard;