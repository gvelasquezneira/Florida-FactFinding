let departmentData = {};

fetch('js/countyDepartments.json')
    .then(response => response.json())
    .then(data => {
        departmentData = data; 
        populatedepartmentDropdown();
    })

function populatedepartmentDropdown() {
    const dropdown = document.getElementById('departmentDropdown');
    
    for (const department in departmentData) {
        const li = document.createElement('li');
        li.innerHTML = `<a class='dropdown-item' href='#' onclick='loaddepartment("${department}")'>${departmentData[department].name}</a>`;
        dropdown.appendChild(li);
    }
}

function loaddepartment(departmentId) {
    const department = departmentData.department[departmentId];  
    if (!department) return; 

    const contentArea = document.getElementById('departmentContent');
    const welcomeSection = document.getElementById('welcomeSection');
    contentArea.innerHTML = '';

    contentArea.innerHTML += `<div class="col-12 mb-4"><h2>${county.name}</h2></div>`;

    county.websites.forEach(site => {
        let buttons = '';

        if (site.urls) {
            const urlsArray = Array.isArray(site.urls) ? site.urls : [site.urls];
        
            urlsArray.forEach((url, index) => {
                let buttonText = '';
        
                if (site.name === "County Commission") {
                    switch (index) {
                        case 0:
                            buttonText = 'Alachua';
                            break;
                        case 1:
                            buttonText = 'Bradoford';
                            break;
                        case 2:
                            buttonText = 'Gilchrist';
                            break;
                        case 3:
                            buttonText = 'Levy';
                            break;
                        case 4:
                            buttonText = 'Union';
                            break;
                        default:
                            buttonText = `Visit Website`;
                    }
                }
        
                else if (site.name === "Sheriff's Office") {
                    switch (index) {
                        case 0:
                            buttonText = 'Alachua';
                            break;
                        case 1:
                            buttonText = 'Bradoford';
                            break;
                        case 2:
                            buttonText = 'Gilchrist';
                            break;
                        case 3:
                            buttonText = 'Levy';
                            break;
                        case 4:
                            buttonText = 'Union';
                            break;
                        default:
                            buttonText = `Visit Website`;
                    }
                }
                else if (site.name === "Property Appraiser") {
                    switch (index) {
                        case 0:
                            buttonText = 'Alachua';
                            break;
                        case 1:
                            buttonText = 'Bradoford';
                            break;
                        case 2:
                            buttonText = 'Gilchrist';
                            break;
                        case 3:
                            buttonText = 'Levy';
                            break;
                        case 4:
                            buttonText = 'Union';
                            break;
                        default:
                            buttonText = `Visit Website`;
                    }
                }
                else if (site.name === "School Board") {
                    switch (index) {
                        case 0:
                            buttonText = 'Alachua';
                            break;
                        case 1:
                            buttonText = 'Bradoford';
                            break;
                        case 2:
                            buttonText = 'Gilchrist';
                            break;
                        case 3:
                            buttonText = 'Levy';
                            break;
                        case 4:
                            buttonText = 'Union';
                            break;
                        default:
                            buttonText = `Visit Website`;
                    }
                }
                else if (site.name === "Clerk of Court") {
                    switch (index) {
                        case 0:
                            buttonText = 'Alachua';
                            break;
                        case 1:
                            buttonText = 'Bradoford';
                            break;
                        case 2:
                            buttonText = 'Gilchrist';
                            break;
                        case 3:
                            buttonText = 'Levy';
                            break;
                        case 4:
                            buttonText = 'Union';
                            break;
                        default:
                            buttonText = `Visit Website`;
                    }
                }
        
                else if (site.name === "Tax Collector") {
                    switch (index) {
                        case 0:
                            buttonText = 'Alachua';
                            break;
                        case 1:
                            buttonText = 'Bradoford';
                            break;
                        case 2:
                            buttonText = 'Gilchrist';
                            break;
                        case 3:
                            buttonText = 'Levy';
                            break;
                        case 4:
                            buttonText = 'Union';
                            break;
                        default:
                            buttonText = `Visit Website`;
                    }
                }
                else if (site.name === "Jail") {
                    switch (index) {
                        case 0:
                            buttonText = 'Alachua';
                            break;
                        case 1:
                            buttonText = 'Bradoford';
                            break;
                        case 2:
                            buttonText = 'Gilchrist';
                            break;
                        case 3:
                            buttonText = 'Levy';
                            break;
                        case 4:
                            buttonText = 'Union';
                            break;
                        default:
                            buttonText = `Visit Website`;
                    }
                }
                else {
                    buttonText = "Visit Website";
                }
        
                buttons += `
    <div class="d-flex flex-row align-items-center justify-content-between mb-2">
        <a href="${url}" class="btn btn-primary me-2 align-text-bottom" target="_blank">${buttonText}</a>
    </div>
`;
            });
        }
        
              

        contentArea.innerHTML += `
            <div class="col-md-6 mb-4">
                <div class="card h-100 shadow-sm">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${site.name}</h5>
                        <p class="card-text">${site.description}</p>
                        <div class="mt-auto">
                            ${buttons}
                        </div>
                    </div>
                </div>
            </div>
        `;

    });

    welcomeSection.style.display = 'none';
    contentArea.style.display = 'flex';
}

    