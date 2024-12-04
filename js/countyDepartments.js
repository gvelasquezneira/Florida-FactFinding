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

   
    contentArea.innerHTML += `<div class="col-12 mb-4"><h2>${departmentId}</h2></div>`;

   
    department.forEach(site => {
        let buttons = '';

        if (site.urls) {
            const urlsArray = Array.isArray(site.urls) ? site.urls : [site.urls];

            urlsArray.forEach((url, index) => {
                let buttonText = `Visit Website`;

                const countyNames = ['Alachua', 'Bradford', 'Gilchrist', 'Levy', 'Union'];
                buttonText = countyNames[index] || buttonText;

                buttons += `
                    <a href="${url}" class="btn btn-link px-2 py-1" target="_blank">${buttonText}</a>
                `;
            });
        }

        contentArea.innerHTML += `
            <div class="col-lg-12 mx-auto mb-3">
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

    welcomeSection.style.display = 'none';
    contentArea.style.display = 'flex';
}
