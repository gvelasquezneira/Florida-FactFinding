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
    if (!department) return; 

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
                    <div class="align-items-left justify-content-between mb-2">
                        <a href="${url}" class="btn btn-primary mx-auto" target="_blank">${buttonText}</a>
                    </div>
                `;
            });
        }

        contentArea.innerHTML += `
            <div class="col-lg-2 mx-auto">
                <div class="card h-100 shadow-sm">
                    <div class="card-body flex-column">
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
