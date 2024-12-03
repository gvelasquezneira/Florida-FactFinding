let departmentData = {};

fetch('js/countyDepartments.json')
    .then(response => response.json())
    .then(data => {
        departmentData = data;
        populatedepartmentDropdown();
    });

function populatedepartmentDropdown() {
    const dropdown = document.getElementById('departmentDropdown');
    
    for (const department in departmentData.department) {
        const li = document.createElement('li');
        li.innerHTML = `<a class='dropdown-item' href='#' onclick='loaddepartment("${department}")'>${department}</a>`;
        dropdown.appendChild(li);
    }
}

function loaddepartment(departmentId) {
    const department = departmentData.department[departmentId];
    if (!department) {
        console.log("NO DEPT");
        return;
    }
    const contentArea = document.getElementById('departmentContent');
    const welcomeSection = document.getElementById('welcomeSection');
    contentArea.innerHTML = ''; 

    contentArea.innerHTML += `<div class="col-12 mb-4 text-center"><h2>${departmentId}</h2></div>`;

    department.forEach(site => {
        let buttons = '';

        if (site.urls) {
            const urlsArray = Array.isArray(site.urls) ? site.urls : [site.urls];

            urlsArray.forEach((url, index) => {
                const countyNames = ['Alachua', 'Bradford', 'Gilchrist', 'Levy', 'Union'];
                const buttonText = countyNames[index] || 'Visit Website';

                buttons += `
                    <a href="${url}" class="btn btn-link px-2 py-1" target="_blank">${buttonText}</a>
                `;
            });
        }

        // Add a responsive card for each site
        contentArea.innerHTML += `
            <div class="col-lg-4 col-md-6 col-sm-12 mx-auto mb-4">
                <div class="card h-100 shadow-sm">
                    <div class="card-body d-flex flex-column">
                        <p class="card-text">${site.description}</p>
                        <div class="d-flex flex-wrap justify-content-center mt-3">
                            ${buttons}
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    // Show content area and hide welcome section
    welcomeSection.style.display = 'none';
    contentArea.style.display = 'flex';
}

