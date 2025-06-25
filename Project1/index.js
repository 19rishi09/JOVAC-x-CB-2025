const username = "19rishi09";

fetch(`https://api.github.com/users/${username}`)
  .then(response => response.json())
  .then(user => {
    const html = `
      <img src="${user.avatar_url}" alt="Profile Picture">
      <h2>${user.name || 'No Name Found'}</h2>
      <p><strong>Username:</strong> ${user.login}</p>
      <p><strong>Bio:</strong> ${user.bio || 'No bio added yet.'}</p>
      <p><strong>Location:</strong> ${user.location || 'Not available'}</p>
      <p><strong>Followers:</strong> ${user.followers} | <strong>Following:</strong> ${user.following}</p>
      <p><strong>Public Repos:</strong> ${user.public_repos}</p>
      <a href="${user.html_url}" target="_blank">🔗 Visit GitHub</a>
    `;
    document.getElementById("profile").innerHTML = html;
  })
  .catch(err => {
    document.getElementById("profile").innerHTML = `<p>Error loading profile: ${err.message}</p>`;
  });
