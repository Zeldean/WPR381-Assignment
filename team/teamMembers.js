// Function to render team members with JSON-like formatting but without quotations
function renderTeamMembers() {
  const teamContainer = document.getElementById('team-members');
  
  teamMembers.forEach(member => {
    const memberCard = document.createElement('div');
    memberCard.className = 'team-member';
    
    memberCard.innerHTML = `
      <div class="member-header">
        <h3 class="member-Name">${member.Name}</h3>
        <span class="member-Role">${member.Role}</span>
      </div>
      <div class="member-json">
        <p><span class="json-syntax">{</span></p>
        <p>&nbsp;&nbsp;<span class="json-key">Name</span><span class="json-syntax">:</span> <span class="json-string">${member.Name}</span><span class="json-syntax">,</span></p>
        <p>&nbsp;&nbsp;<span class="json-key">Role</span><span class="json-syntax">:</span> <span class="json-string">${member.Role}</span><span class="json-syntax">,</span></p>
        <p>&nbsp;&nbsp;<span class="json-key">Description</span><span class="json-syntax">:</span> <span class="json-string">${member.Description}</span></p>
        <p><span class="json-syntax">}</span></p>
      </div>
    `;
    
    teamContainer.appendChild(memberCard);

  });
}

