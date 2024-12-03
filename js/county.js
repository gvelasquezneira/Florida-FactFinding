let countyData = {};

fetch('js/county.json')
    .then(response => response.json())
    .then(data => {
        countyData = data; 
        populateCountyDropdown();
    })

function populateCountyDropdown() {
    const dropdown = document.getElementById('countyDropdown');
    
    for (const county in countyData) {
        const li = document.createElement('li');
        li.innerHTML = `<a class='dropdown-item' href='#' onclick='loadCounty("${county}")'>${countyData[county].name}</a>`;
        dropdown.appendChild(li);
    }
}

function loadCounty(countyId) {
    const county = countyData[countyId];
    if (!county) return;

    const contentArea = document.getElementById('countyContent');
    const welcomeSection = document.getElementById('welcomeSection');
    contentArea.innerHTML = '';

    contentArea.innerHTML += `<div class="col-12 mb-4"><h2>${county.name}</h2></div>`;

    county.websites.forEach(site => {
        let buttons = '';

        if (site.urls) {
            site.urls.forEach((url, index) => {
                let buttonText = '';
        
                // Custom button labels for "County Commission"
                if (site.name === "County Commission") {
                    switch (index) {
                        case 0:
                            buttonText = 'County';
                            break;
                        case 1:
                            buttonText = 'Board';
                            break;
                        case 2:
                            buttonText = 'Map';
                            break;
                        case 3:
                            buttonText = 'Meetings';
                            break;
                        case 4:
                            buttonText = 'PRR';
                            break;
                        default:
                            buttonText = `Visit Website`;
                            break;
                    }
                }
        
                // Custom button labels for "Sheriff's Office"
                else if (site.name === "Sheriff's Office") {
                    switch (index) {
                        case 0:
                            buttonText = 'Sheriff';
                            break;
                        case 1:
                            buttonText = 'PRR';
                            break;
                        case 2:
                            buttonText = 'Ride-Along';
                            break;
                        default:
                            buttonText = `Visit Website`;
                            break;
                    }
                }
                else if (site.name === "Property Appraiser") {
                    switch (index) {
                        case 0:
                            buttonText = 'Property Appraiser';
                            break;
                        case 1:
                            buttonText = 'Property Search';
                            break;
                        default:
                            buttonText = `Visit Website`;
                            break;
                    }
                }
        
                // Default fallback for other sites
                else {
                    buttonText = `Link ${index + 1}`;
                }
        
                // Generate the button
                buttons += `<a href="${url}" class="btn btn-primary mb-2 me-2" target="_blank">${buttonText}</a>`;
            });
        }        

        contentArea.innerHTML += `
            <div class="col-md-6 mb-4">
                <div class="card h-100 shadow-sm">
                    <div class="card-body">
                        <h5 class="card-title">${site.name}</h5>
                        <p class="card-text">${site.description}</p>
                        ${buttons}
                    </div>
                </div>
            </div>
        `;
    });

    welcomeSection.style.display = 'none';
    contentArea.style.display = 'flex';
}

    