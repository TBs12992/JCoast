const jobForm = document.getElementById('jobForm');
const jobList = document.getElementById('jobList');
let jobs = JSON.parse(localStorage.getItem('jobs')) || [];

function displayJobs() {
  jobList.innerHTML = '';
  jobs.forEach((job, index) => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${job.title}</strong> - $${job.price}<br>${job.description}`;
    jobList.appendChild(li);
  });
}

jobForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const price = document.getElementById('price').value;

  const newJob = { title, description, price };
  jobs.push(newJob);
  localStorage.setItem('jobs', JSON.stringify(jobs));
  displayJobs();
  jobForm.reset();
});

displayJobs();
