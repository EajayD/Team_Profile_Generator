function engineerCard(name, role, id, email, github) {
    return `
    <div class="card text-white bg-danger mb-3 p-4" style="max-width: 18rem;">
      <div class="card-header"><h3>${name}</h3></div>
      <div class="card-body bg-dark">
        <h5 class="card-title">${role}</h5>
        <p class="card-text">ID: ${id}</p><br/>
        <p class="card-text">Email: <a href = "${email}">${email}</a></p><br/>
        <p class="card-text">Github: <a href="https://github.com/${github}">${github}</a></p><br/>
      </div>
    </div>
    `
    }
    
    module.exports = engineerCard;