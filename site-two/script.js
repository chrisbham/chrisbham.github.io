
const studentInput = document.getElementById("student-names");
const layoutSelect = document.getElementById("layout-select");
const seatingGrid = document.getElementById("seating-grid");

const generateBtn = document.getElementById("generate-btn");
const shuffleBtn = document.getElementById("shuffle-btn");
const printBtn = document.getElementById("print-btn");

let currentStudents = [];

function getStudentList() {
  return studentInput.value
    .split("\n")
    .map(name => name.trim())
    .filter(name => name.length > 0);
}

function saveState() {
  localStorage.setItem("seating_names", studentInput.value);
  localStorage.setItem("seating_layout", layoutSelect.value);
  localStorage.setItem("seating_order", JSON.stringify(currentStudents));
}

function loadState() {
  const savedNames = localStorage.getItem("seating_names");
  const savedLayout = localStorage.getItem("seating_layout");
  const savedOrder = localStorage.getItem("seating_order");

  if (savedNames !== null) {
    studentInput.value = savedNames;
  }

  if (savedLayout !== null) {
    layoutSelect.value = savedLayout;
  }

  if (savedOrder !== null) {
    try {
      currentStudents = JSON.parse(savedOrder);
    } catch {
      currentStudents = getStudentList();
    }
  } else {
    currentStudents = getStudentList();
  }

  renderChart(currentStudents);
}

function createDesk(name) {
  const desk = document.createElement("div");
  desk.className = "desk";
  desk.textContent = name;
  return desk;
}

function renderChart(students) {
  seatingGrid.innerHTML = "";
  seatingGrid.className = layoutSelect.value;

  const layout = layoutSelect.value;

  if (layout === "rows") {
    students.forEach(name => {
      seatingGrid.appendChild(createDesk(name));
    });
  }

  else if (layout === "pairs" || layout === "groups") {
    const groupSize = layout === "pairs" ? 2 : 4;

    for (let i = 0; i < students.length; i += groupSize) {
      const pod = document.createElement("div");
      pod.className = "pod-wrapper";

      students.slice(i, i + groupSize).forEach(name => {
        pod.appendChild(createDesk(name));
      });

      seatingGrid.appendChild(pod);
    }
  }

  else if (layout === "ushape") {
    renderUShape(students);
  }
}

function renderUShape(students) {
  if (students.length === 0) return;

  const bottomCount = Math.ceil(students.length / 3);
  const sideStudents = students.length - bottomCount;

  const leftCount = Math.ceil(sideStudents / 2);
  const rightCount = sideStudents - leftCount;

  const sideRows = Math.max(leftCount, rightCount);
  const columns = bottomCount + 2;

  seatingGrid.style.gridTemplateColumns =
    `repeat(${columns}, minmax(0, 1fr))`;

  let studentIndex = 0;

  // Left side of the horseshoe
  for (let row = 1; row <= leftCount; row++) {
    const desk = createDesk(students[studentIndex++]);
    desk.style.gridColumn = "1";
    desk.style.gridRow = String(row);
    seatingGrid.appendChild(desk);
  }

  // Right side of the horseshoe
  for (let row = rightCount; row >= 1; row--) {
    const desk = createDesk(students[studentIndex++]);
    desk.style.gridColumn = String(columns);
    desk.style.gridRow = String(row);
    seatingGrid.appendChild(desk);
  }

  // Back of the horseshoe
  const bottomStudents = students.slice(studentIndex);

  bottomStudents.forEach((name, index) => {
    const desk = createDesk(name);
    desk.style.gridColumn = String(index + 2);
    desk.style.gridRow = String(sideRows + 1);
    seatingGrid.appendChild(desk);
  });
}

function shuffleArray(array) {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

generateBtn.addEventListener("click", () => {
  currentStudents = getStudentList();
  renderChart(currentStudents);
  saveState();
});

shuffleBtn.addEventListener("click", () => {
  if (currentStudents.length === 0) {
    currentStudents = getStudentList();
  }

  currentStudents = shuffleArray(currentStudents);
  renderChart(currentStudents);
  saveState();
});

layoutSelect.addEventListener("change", () => {
  if (currentStudents.length === 0) {
    currentStudents = getStudentList();
  }

  renderChart(currentStudents);
  saveState();
});

printBtn.addEventListener("click", () => {
  window.print();
});

// Hide guide and controls when embedded
if (new URLSearchParams(window.location.search).get("embed") === "true") {
  document.querySelector(".site-header")?.classList.add("hidden");
  document.querySelector(".guide-section")?.classList.add("hidden");
  document.querySelector(".controls")?.classList.add("hidden");
}

loadState();
