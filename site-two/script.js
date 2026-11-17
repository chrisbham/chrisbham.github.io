const namesInput = document.getElementById('student-names');
const layoutSelect = document.getElementById('layout-select');
const seatingGrid = document.getElementById('seating-grid');
const generateBtn = document.getElementById('generate-btn');
const shuffleBtn = document.getElementById('shuffle-btn');
const printBtn = document.getElementById('print-btn');

let currentStudents = [];

function getStudentList() {
  return namesInput.value
    .split('\n')
    .map(name => name.trim())
    .filter(name => name.length > 0);
}

function saveState() {
  localStorage.setItem('seating_names', namesInput.value);
  localStorage.setItem('seating_layout', layoutSelect.value);
  localStorage.setItem('seating_order', JSON.stringify(currentStudents));
}

function loadState() {
  const savedNames = localStorage.getItem('seating_names');
  const savedLayout = localStorage.getItem('seating_layout');
  const savedOrder = localStorage.getItem('seating_order');

  if (savedNames) namesInput.value = savedNames;
  if (savedLayout) layoutSelect.value = savedLayout;
  if (savedOrder) {
    currentStudents = JSON.parse(savedOrder);
  } else {
    currentStudents = getStudentList();
  }
}

function renderChart(students) {
  const layout = layoutSelect.value;
  seatingGrid.innerHTML = '';
  seatingGrid.className = `seating-grid layout-${layout}`;

  if (layout === 'rows') {
    students.forEach(student => {
      const desk = document.createElement('div');
      desk.className = 'desk';
      desk.textContent = student;
      seatingGrid.appendChild(desk);
    });
  } else {
    const groupSize = layout === 'pairs' ? 2 : 4;
    for (let i = 0; i < students.length; i += groupSize) {
      const pod = document.createElement('div');
      pod.className = 'pod-wrapper';

      const chunk = students.slice(i, i + groupSize);
      chunk.forEach(student => {
        const desk = document.createElement('div');
        desk.className = 'desk';
        desk.textContent = student;
        pod.appendChild(desk);
      });

      seatingGrid.appendChild(pod);
    }
  }
}

function shuffleArray(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

generateBtn.addEventListener('click', () => {
  currentStudents = getStudentList();
  saveState();
  renderChart(currentStudents);
});

shuffleBtn.addEventListener('click', () => {
  if (currentStudents.length === 0) currentStudents = getStudentList();
  currentStudents = shuffleArray(currentStudents);
  saveState();
  renderChart(currentStudents);
});

layoutSelect.addEventListener('change', () => {
  if (currentStudents.length === 0) currentStudents = getStudentList();
  saveState();
  renderChart(currentStudents);
});

printBtn.addEventListener('click', () => {
  window.print();
});

// Check for Classroomscreen Embed Mode (?embed=true)
if (window.location.search.includes('embed=true')) {
  document.querySelector('.site-header').style.display = 'none';
  document.querySelector('.guide-section').style.display = 'none';
  document.querySelector('.controls').style.display = 'none';
}

// Load saved chart and render on startup
loadState();
renderChart(currentStudents);
