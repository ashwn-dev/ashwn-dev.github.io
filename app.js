// Dynamically populate your project list
const projects = [
  { name: 'Project A', url: '#' },
  { name: 'Project B', url: '#' }
];

const ul = document.getElementById('project-list');
projects.forEach(p => {
  const li = document.createElement('li');
  li.innerHTML = `<a href="${p.url}" target="_blank">${p.name}</a>`;
  ul.appendChild(li);
});
