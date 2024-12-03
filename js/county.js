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
            const urlsArray = Array.isArray(site.urls) ? site.urls : [site.urls];
        
            urlsArray.forEach((url, index) => {
                let buttonText = '';
        
                if (site.name === "Alachua County Commission") {
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
                    }
                }
        
                else if (site.name === "Alachua Sheriff's Office") {
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
                    }
                }
                else if (site.name === "Alachua Property Appraiser") {
                    switch (index) {
                        case 0:
                            buttonText = 'Property Appraiser';
                            break;
                        case 1:
                            buttonText = 'Property Search';
                            break;
                        case 2:
                            buttonText = 'Map';
                            break;
                        default:
                            buttonText = `Visit Website`;
                    }
                }
                else if (site.name === "Alachua School Board") {
                    switch (index) {
                        case 0:
                            buttonText = 'School Board';
                            break;
                        case 1:
                            buttonText = 'Board';
                            break;
                        case 2:
                            buttonText = 'Superintendent';
                            break;
                        case 3:
                            buttonText = 'Finances';
                            break;
                        case 4:
                            buttonText = 'Directory';
                            break;
                        case 5:
                            buttonText = 'PRR';
                            break;
                        case 6:
                            buttonText = 'Meetings';
                            break;
                        default:
                            buttonText = `Visit Website`;
                    }
                }
                else if (site.url) {
                    if (site.name === "Alachua Clerk of Court") {
                        buttonText = "Clerk of Court";
                    } else if (site.name === "Tax Collector") {
                        buttonText = "Alachua Tax Collector";
                    } else if (site.name === "Jail") {
                        buttonText = "Alachua Inmate Search";
                    } 
                }
                else if (site.name === "Levy County Commission") {
                    switch (index) {
                        case 0:
                            buttonText = 'County';
                            break;
                        case 1:
                            buttonText = 'Board';
                            break;
                        case 2:
                            buttonText = 'Meetings';
                            break;
                        case 3:
                            buttonText = 'PRR';
                            break;
                        default:
                            buttonText = `Visit Website`;
                    }
                }
        
                else if (site.name === "Levy Sheriff's Office") {
                    switch (index) {
                        case 0:
                            buttonText = 'Sheriff';
                            break;
                        case 1:
                            buttonText = 'PRR';
                            break;
                        default:
                            buttonText = `Visit Website`;
                    }
                }
                else if (site.name === "Levy Property Appraiser") {
                    switch (index) {
                        case 0:
                            buttonText = 'Property Appraiser';
                            break;
                        case 1:
                            buttonText = 'Property Search';
                            break;
                        case 2:
                            buttonText = 'Map';
                            break;
                        default:
                            buttonText = `Visit Website`;
                    }
                }
                else if (site.name === "Levy School Board") {
                    switch (index) {
                        case 0:
                            buttonText = 'School Board';
                            break;
                        case 1:
                            buttonText = 'Board';
                            break;
                        case 2:
                            buttonText = 'Superintendent';
                            break;
                        case 3:
                            buttonText = 'Finances';
                            break;
                        case 4:
                            buttonText = 'Directory';
                            break;
                        case 5:
                            buttonText = 'PRR';
                            break;
                        case 6:
                            buttonText = 'Meetings';
                            break;
                        default:
                            buttonText = `Visit Website`;
                    }
                }
                else if (site.url) {
                    if (site.name === "Levy Clerk of Court") {
                        buttonText = "Clerk of Court";
                    } else if (site.name === "Levy Tax Collector") {
                        buttonText = "Tax Collector";
                    } else if (site.name === "Levy Jail") {
                        buttonText = "Inmate Search";
                    } 
                }
                else if (site.name === "Bradford County Commission") {
                    switch (index) {
                        case 0:
                            buttonText = 'County';
                            break;
                        case 1:
                            buttonText = 'Board';
                            break;
                        case 2:
                            buttonText = 'Meetings';
                            break;
                        case 3:
                            buttonText = 'PRR';
                            break;
                        default:
                            buttonText = `Visit Website`;
                    }
                }
                
                else if (site.name === "Bradford Sheriff's Office") {
                    switch (index) {
                        case 0:
                            buttonText = 'Sheriff';
                            break;
                        case 1:
                            buttonText = 'PRR';
                            break;
                        default:
                            buttonText = `Visit Website`;
                    }
                }
                else if (site.name === "Bradford Property Appraiser") {
                    switch (index) {
                        case 0:
                            buttonText = 'Property Appraiser';
                            break;
                        case 1:
                            buttonText = 'Property Search';
                            break;
                        case 2:
                            buttonText = 'Map';
                            break;
                        default:
                            buttonText = `Visit Website`;
                    }
                }
                else if (site.name === "Bradford School Board") {
                    switch (index) {
                        case 0:
                            buttonText = 'School Board';
                            break;
                        case 1:
                            buttonText = 'Board';
                            break;
                        case 2:
                            buttonText = 'Superintendent';
                            break;
                        case 3:
                            buttonText = 'Finances';
                            break;
                        case 4:
                            buttonText = 'Directory';
                            break;
                        case 5:
                            buttonText = 'PRR';
                            break;
                        case 6:
                            buttonText = 'Meetings';
                            break;
                        default:
                            buttonText = `Visit Website`;
                    }
                }
                else if (site.url) {
                    if (site.name === "Bradford Clerk of Court") {
                        buttonText = "Clerk of Court";
                    } else if (site.name === "Bradford Tax Collector") {
                        buttonText = "Tax Collector";
                    } else if (site.name === "Bradford Jail") {
                        buttonText = "Inmate Search";
                    } 
                }
                else if (site.name === "Union County Commission") {
                    switch (index) {
                        case 0:
                            buttonText = 'County';
                            break;
                        case 1:
                            buttonText = 'Board';
                            break;
                        case 2:
                            buttonText = 'Meetings';
                            break;
                        case 3:
                            buttonText = 'Map';
                            break;
                        default:
                            buttonText = `Visit Website`;
                    }
                }
                
                else if (site.name === "Union Sheriff's Office") {
                    switch (index) {
                        case 0:
                            buttonText = 'Sheriff';
                            break;
                        case 1:
                            buttonText = 'PRR';
                            break;
                        default:
                            buttonText = `Visit Website`;
                    }
                }
                else if (site.name === "Union Property Appraiser") {
                    switch (index) {
                        case 0:
                            buttonText = 'Property Appraiser';
                            break;
                        case 1:
                            buttonText = 'Property Search';
                            break;
                        case 2:
                            buttonText = 'Map';
                            break;
                        default:
                            buttonText = `Visit Website`;
                    }
                }
                else if (site.name === "Union School Board") {
                    switch (index) {
                        case 0:
                            buttonText = 'School Board';
                            break;
                        case 1:
                            buttonText = 'Board + Superintendent + Meetings';
                            break;
                        case 2:
                            buttonText = 'Finances';
                            break;
                        case 3:
                            buttonText = 'Directory';
                            break;
                        case 4:
                            buttonText = 'PRR';
                            break;
                        default:
                            buttonText = `Visit Website`;
                    }
                }
                else if (site.url) {
                    if (site.name === "Union Clerk of Court") {
                        buttonText = "Clerk of Court";
                    } else if (site.name === "Union Tax Collector") {
                        buttonText = "Tax Collector";
                    } else if (site.name === "Union Jail") {
                        buttonText = "Inmate Search";
                    } 
                }
                else if (site.name === "Gilchrist County Commission") {
                    switch (index) {
                        case 0:
                            buttonText = 'County';
                            break;
                        case 1:
                            buttonText = 'Board';
                            break;
                        case 2:
                            buttonText = 'Meetings';
                            break;
                        case 3:
                            buttonText = 'PRR';
                            break;
                        default:
                            buttonText = `Visit Website`;
                    }
                }
                
                else if (site.name === "Gilchrist Sheriff's Office") {
                    switch (index) {
                        case 0:
                            buttonText = 'Sheriff';
                            break;
                        case 1:
                            buttonText = 'PRR';
                            break;
                        default:
                            buttonText = `Visit Website`;
                    }
                }
                else if (site.name === "Gilchrist Property Appraiser") {
                    switch (index) {
                        case 0:
                            buttonText = 'Property Appraiser';
                            break;
                        case 1:
                            buttonText = 'Property Search';
                            break;
                        case 2:
                            buttonText = 'Map';
                            break;
                        default:
                            buttonText = `Visit Website`;
                    }
                }
                else if (site.name === "Gilchrist School Board") {
                    switch (index) {
                        case 0:
                            buttonText = 'School Board';
                            break;
                        case 1:
                            buttonText = 'Board';
                            break;
                        case 2:
                            buttonText = 'Superintendent';
                            break;
                        case 3:
                            buttonText = 'Finances';
                            break;
                        case 4:
                            buttonText = 'Directory';
                            break;
                        case 5:
                            buttonText = 'PRR';
                            break;
                        case 6:
                            buttonText = 'Meetings';
                            break;
                        default:
                            buttonText = `Visit Website`;
                    }
                }
                else if (site.url) {
                    if (site.name === "Gilchrist Clerk of Court") {
                        buttonText = "Clerk of Court";
                    } else if (site.name === "Gilchrist Tax Collector") {
                        buttonText = "Tax Collector";
                    } else if (site.name === "Gilchrist Jail") {
                        buttonText = "Inmate Search";
                    } 
                }
                else {
                    buttonText = "Visit Website";
                }
        
                buttons += `
    <div class="btn btn-link m-2">
        <a href="${url}" class="btn btn-link d-block mx-auto" target="_blank">${buttonText}</a>
    </div>
`;

            });
        }
        
              

        contentArea.innerHTML += `
            <div class="col-lg-12 mx-auto">
                <div class="card h-100 shadow-sm">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${site.name}</h5><br>
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

    