

//the arrow function is really useful when using arrays for example
const jobs =[
  {Id:1, isActive: true},
  {Id:2, isActive: true},
  {Id:3, isActive: false},
  {Id:4, isActive: true},
];
const activeJobs = jobs.filter(job =>job.isActive);
console.log(activeJobs);