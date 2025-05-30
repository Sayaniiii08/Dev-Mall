// Sample job data — you can later fetch this from an API or JSON
const jobs = [
  {
    title: "Frontend Developer",
    company: "Google",
    location: "India",
    experience: "fresher",
    mode: "remote"
  },
  {
    title: "Software Engineer Intern",
    company: "Microsoft",
    location: "USA",
    experience: "student",
    mode: "on-site"
  },
  {
    title: "Backend Developer",
    company: "Amazon",
    location: "India",
    experience: "experienced",
    mode: "wfh"
  }
];

// DOM Elements
const jobListings = document.getElementById("job-listings");
const searchInput = document.getElementById("search");
const experienceFilter = document.getElementById("experience");
const locationFilter = document.getElementById("location");
const modeFilter = document.getElementById("mode");

// Render job cards
function displayJobs(filteredJobs) {
  jobListings.innerHTML = "";

  if (filteredJobs.length === 0) {
    jobListings.innerHTML = "<p>No jobs found.</p>";
    return;
  }

  filteredJobs.forEach(job => {
    const card = document.createElement("div");
    card.className = "job-card";

    card.innerHTML = `
      <div class="job-title">${job.title}</div>
      <div class="job-company">${job.company}</div>
      <div class="job-location">${job.location} • ${job.mode} • ${job.experience}</div>
    `;

    jobListings.appendChild(card);
  });
}

// Filter logic
function filterJobs() {
  const searchText = searchInput.value.toLowerCase();
  const selectedExp = experienceFilter.value;
  const selectedLoc = locationFilter.value;
  const selectedMode = modeFilter.value;

  const filtered = jobs.filter(job => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchText) ||
      job.company.toLowerCase().includes(searchText);

    const matchesExp = selectedExp === "" || job.experience === selectedExp;
    const matchesLoc = selectedLoc === "" || job.location.toLowerCase() === selectedLoc;
    const matchesMode = selectedMode === "" || job.mode === selectedMode;

    return matchesSearch && matchesExp && matchesLoc && matchesMode;
  });

  displayJobs(filtered);
}

// Attach listeners
searchInput.addEventListener("input", filterJobs);
experienceFilter.addEventListener("change", filterJobs);
locationFilter.addEventListener("change", filterJobs);
modeFilter.addEventListener("change", filterJobs);

// Initial load
displayJobs(jobs);

