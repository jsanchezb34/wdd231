import byuiCourse from "./course.mjs";

export function setSectionSelection() {
  const sectionSelect = document.querySelector("#sectionNumber");
  byuiCourse.sections.forEach((section) => {
    const option = document.createElement("option");
    option.value = section.sectionNumber;
    option.textContent = `${section.sectionNumber}`;
    sectionSelect.appendChild(option);
  });
}

export function populatessections(sections) {
  const output = document.querySelector('#sectionOutput');
  output.innerHTML = sections.map(section =>
     '<p>Section ${section.sectionNumber} - Instructor: ${section.instructor} - Enrolled: ${section.enrolled}</p>')
  .join('')
}

function renderSections(sections) {
  const html = sections.map(
    (section) => `<tr>
    <td>${section.sectionNumber}</td>
    <td>${section.enrolled}</td>
    <td>${section.instructor}</td></tr>`
  );
  document.querySelector("#sections").innerHTML = html.join("");
}