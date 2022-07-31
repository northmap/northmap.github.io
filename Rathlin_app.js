
mapboxgl.accessToken = config.accessToken;
const columnHeaders = config.sideBarInfo;

let geojsonData = {};
const filteredGeojson = {
    "type": "FeatureCollection",
    "features": []
};
var bounds = [
    [-6.33078,55.18797], // Southwest coordinates
    [-6.13943,55.33703] // Northeast coordinates
    ];
const map = new mapboxgl.Map({
    container: "map",
    style: config.style,
    center: config.center,
    zoom: config.zoom,
    pitch: config.pitch,
    maxBounds: bounds // Sets bounds as max
});

function flyToLocation(currentFeature, zoom) {
    // var modified_feature = currentFeature;
    // console.log(currentFeature);
    // modified_feature[0] += 0.005*modified_feature[0];
    // console.log(modified_feature);  
    map.flyTo({
        center: currentFeature,
        offset: [0, -150],
        zoom: 15,
        pitch: 0,
        speed: 0.3, // make the flying slow
        curve: 0.9,
    });
}

function createPopup(currentFeature) {
    const popups = document.getElementsByClassName("mapboxgl-popup");
    /** Check if there is already a popup on the map and if so, remove it */
    if (popups[0]) popups[0].remove();
    const popup = new mapboxgl.Popup({ closeOnClick: true })
        .setLngLat(currentFeature.geometry.coordinates)
        .setHTML("<h3>" + currentFeature.properties[config.popupInfo] + "</h3>"+
        '<h2>' + currentFeature.properties.Comments + '</h2>'+'<h4>' + currentFeature.properties.Link_URL + '</h4>')
        .addTo(map);
    
    const width_of_content = $('iframe').contents().width();
    $(".mapboxgl-popup-content").width(width_of_content);
    setTimeout(
        onYouTubeIframeAPIReady(), 2500);
    
    // var docwidth = $(".mapboxgl-canvas").width();
    // var popupwidth = $(".mapboxgl-popup-content").width();
    // var offset_div = $(".mapboxgl-popup-content").offset();
    // offset_div['left'] = (docwidth - popupwidth)/2;
    // console.log(offset_div);
    // $(".mapboxgl-popup-content").offset(offset_div);

}

function buildLocationList(locationData) {
    /* Add a new listing section to the sidebar. */
    const listings = document.getElementById("listings");
    listings.innerHTML = "";
    locationData.features.forEach(function (location, i) {
        const prop = location.properties;

        const listing = listings.appendChild(document.createElement("div"));
        /* Assign a unique `id` to the listing. */
        listing.id = "listing-" + prop.id;

        /* Assign the `item` class to each listing for styling. */
        listing.className = "item";

        /* Add the link to the individual listing created above. */
        const link = listing.appendChild(document.createElement("a"));
        link.className = "title";

        link.id = "link-" + prop.id;
        link.innerHTML = '<button class="flex-parent flex-parent--center-main">' + '<p style="line-height: 1.25">' + prop[columnHeaders[0]] + "</p>" + "</button>";

        /* Add details to the individual listing. */
        const details = listing.appendChild(document.createElement("div"));
        details.className = "content";

        for (let i = 1; i < columnHeaders.length; i++) {
            const div = document.createElement("div");
            div.innerText += prop[columnHeaders[i]];
            div.className;
            details.appendChild(div);
        }

        link.addEventListener("click", function () {
            const clickedListing = location.geometry.coordinates;
            flyToLocation(clickedListing, 11);
            createPopup(location);

            const activeItem = document.getElementsByClassName("active");
            if (activeItem[0]) {
                activeItem[0].classList.remove("active");
            }
            this.parentNode.classList.add("active");

            const divList = document.querySelectorAll(".content");
            const divCount = divList.length;
            for (i = 0; i < divCount; i++) {
                divList[i].style.maxHeight = null;
            };

            for (let i = 0; i < geojsonData.features.length; i++) {
                this.parentNode.classList.remove("active");
                this.classList.toggle("active");
                const content = this.nextElementSibling;
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            };
        });
    });

};

// Build dropdown list function
// title - the name or 'category' of the selection e.g. 'Languages: '
// defaultValue - the default option for the dropdown list
// listItems - the array of filter items

function buildDropDownList(title, listItems) {

    const filtersDiv = document.getElementById("filters");
    const mainDiv = document.createElement("div");
    const filterTitle = document.createElement("h3");
    filterTitle.innerText = title;
    filterTitle.classList.add("py12", "txt-bold");
    mainDiv.appendChild(filterTitle);

    const selectContainer = document.createElement("div");
    selectContainer.classList.add("select-container", "center");

    const dropDown = document.createElement("select");
    dropDown.classList.add("select", "filter-option");

    const selectArrow = document.createElement("div");
    selectArrow.classList.add("select-arrow");

    const firstOption = document.createElement("option");

    dropDown.appendChild(firstOption);
    selectContainer.appendChild(dropDown);
    selectContainer.appendChild(selectArrow);
    mainDiv.appendChild(selectContainer);

    for (let i = 0; i < listItems.length; i++) {
        const opt = listItems[i];
        const el1 = document.createElement("option");
        el1.textContent = opt;
        el1.value = opt;
        dropDown.appendChild(el1);
    }
    filtersDiv.appendChild(mainDiv);
}

// Build checkbox function
// title - the name or 'category' of the selection e.g. 'Languages: '
// listItems - the array of filter items
// To DO: Clean up code - for every third checkbox, create a div and append new checkboxes to it

function buildCheckbox(title, listItems) {
    const filtersDiv = document.getElementById("filters");
    const mainDiv = document.createElement("div");
    const filterTitle = document.createElement("div");
    const formatcontainer = document.createElement("div");
    filterTitle.classList.add("center", "flex-parent", "py12", "txt-bold");
    formatcontainer.classList.add("center", "flex-parent", "flex-parent--column", "px3", "flex-parent--space-between-main");
    const secondLine = document.createElement("div");
    secondLine.classList.add("center", "flex-parent", "py12", "px3", "flex-parent--space-between-main");
    filterTitle.innerText = title;
    mainDiv.appendChild(filterTitle);
    mainDiv.appendChild(formatcontainer);

    for (let i = 0; i < listItems.length; i++) {

        const container = document.createElement("label");

        container.classList.add("checkbox-container");

        const input = document.createElement("input");
        input.classList.add("px12", "filter-option");
        input.setAttribute("type", "checkbox");
        input.setAttribute("id", listItems[i]);
        input.setAttribute("value", listItems[i]);

        const checkboxDiv = document.createElement("div");
        const inputValue = document.createElement("p");
        inputValue.innerText = listItems[i];
        checkboxDiv.classList.add("checkbox", "mr6");
        checkboxDiv.appendChild(Assembly.createIcon("check"));

        container.appendChild(input);
        container.appendChild(checkboxDiv);
        container.appendChild(inputValue);

        formatcontainer.appendChild(container);
    }
    filtersDiv.appendChild(mainDiv);
}

const selectFilters = [];
const checkboxFilters = [];

function createFilterObject(filterSettings) {
    filterSettings.forEach(function (filter) {
        if (filter.type === "checkbox") {

            columnHeader = filter.columnHeader;
            listItems = filter.listItems;

            const keyValues = {};
            Object.assign(keyValues, { header: columnHeader, value: listItems });
            checkboxFilters.push(keyValues);
        }
        if (filter.type === "dropdown") {
            columnHeader = filter.columnHeader;
            listItems = filter.listItems;

            const keyValues = {};

            Object.assign(keyValues, { header: columnHeader, value: listItems });
            selectFilters.push(keyValues);
        }
    });
}

function applyFilters() {
    const filterForm = document.getElementById("filters");

    filterForm.addEventListener("change", function () {
        const filterOptionHTML = this.getElementsByClassName("filter-option");
        const filterOption = [].slice.call(filterOptionHTML);

        const geojSelectFilters = [];
        const geojCheckboxFilters = [];
        filteredFeatures = [];
        filteredGeojson.features = [];

        filterOption.forEach(function (filter) {
            if (filter.type === "checkbox" && filter.checked) {
                checkboxFilters.forEach(function (objs) {
                    Object.entries(objs).forEach(function ([key, value]) {
                        if (value.includes(filter.value)) {
                            const geojFilter = [objs.header, filter.value];
                            geojCheckboxFilters.push(geojFilter);
                        }
                    });
                });
            }
            if (filter.type === "select-one" && filter.value) {
                selectFilters.forEach(function (objs) {

                    Object.entries(objs).forEach(function ([key, value]) {
                        if (value.includes(filter.value)) {
                            const geojFilter = [objs.header, filter.value];
                            geojSelectFilters.push(geojFilter);
                        }
                    });

                });

            }
        });

        if (geojCheckboxFilters.length === 0 && geojSelectFilters.length === 0) {
            geojsonData.features.forEach(function (feature) {
                filteredGeojson.features.push(feature);
            });
        } else if (geojCheckboxFilters.length > 0) {
            geojCheckboxFilters.forEach(function (filter) {
                geojsonData.features.forEach(function (feature) {
                    if (feature.properties[filter[0]].includes(filter[1])) {
                        if (filteredGeojson.features.filter(f => (f.properties.id === feature.properties.id)).length === 0) {
                            filteredGeojson.features.push(feature);
                        }
                    }
                });
            });
            if (geojSelectFilters.length > 0) {
                const removeIds = [];
                filteredGeojson.features.forEach(function (feature) {
                    let selected = true;
                    geojSelectFilters.forEach(function (filter) {
                        if (feature.properties[filter[0]].indexOf(filter[1]) < 0 && selected === true) {
                            selected = false;
                            removeIds.push(feature.properties.id);
                        } else if (selected === false) {
                            removeIds.push(feature.properties.id);
                        }
                    });
                });
                removeIds.forEach(function (id) {
                    const idx = filteredGeojson.features.findIndex(f => (f.properties.id === id));
                    filteredGeojson.features.splice(idx, 1);
                });
            }
        } else {
            geojsonData.features.forEach(function (feature) {
                let selected = true;
                geojSelectFilters.forEach(function (filter) {
                    if (!feature.properties[filter[0]].includes(filter[1]) && selected === true) {
                        selected = false;
                    }
                });
                if (selected === true && filteredGeojson.features.filter(f => (f.properties.id === feature.properties.id)).length === 0) {
                    filteredGeojson.features.push(feature);
                }
            });
        }

        map.getSource("locationData").setData(filteredGeojson);
         map.getSource("text").setData(filteredGeojson);
        buildLocationList(filteredGeojson);

    });

}

function filters(filterSettings) {
    filterSettings.forEach(function (filter) {
        if (filter.type === "checkbox") {
            buildCheckbox(filter.title, filter.listItems);
        } else if (filter.type === "dropdown") {
            buildDropDownList(filter.title, filter.listItems);
        }
    });
}

function removeFilters() {

    let input = document.getElementsByTagName('input');
    let select = document.getElementsByTagName('select');
    let selectOption = [].slice.call(select);
    let checkboxOption = [].slice.call(input);
    filteredGeojson.features = [];

    checkboxOption.forEach(function (checkbox) {
        if (checkbox.type == 'checkbox' && checkbox.checked == true) {
            checkbox.checked = false

        }
    });

    selectOption.forEach(function (option) {
        option.selectedIndex = 0
    });

    map.getSource("locationData").setData(geojsonData);
    map.getSource("text").setData(geojsonData);
    buildLocationList(geojsonData);


}


function removeFiltersButton() {
    const removeFilter = document.getElementById("removeFilters");
    removeFilter.addEventListener("click", function () {

        removeFilters();

    });
};

createFilterObject(config.filters);
applyFilters();
filters(config.filters);
removeFiltersButton();




function sortByDistance(selectedPoint) {
    const options = { units: "miles" };
    if (filteredGeojson.features.length > 0) {
        var data = filteredGeojson
    }
    else {
        var data = geojsonData
    }
    data.features.forEach(function (data) {
        Object.defineProperty(data.properties, "distance", {
            value: turf.distance(selectedPoint, data.geometry, options),
            writable: true,
            enumerable: true,
            configurable: true
        });


    });

    data.features.sort(function (a, b) {
        if (a.properties.distance > b.properties.distance) {
            return 1;
        }
        if (a.properties.distance < b.properties.distance) {
            return -1;
        }
        return 0; // a must be equal to b
    });
    const listings = document.getElementById("listings");
    while (listings.firstChild) {
        listings.removeChild(listings.firstChild);
    }
    buildLocationList(data);
}



map.on("load", function () {


    // csv2geojson - following the Sheet Mapper tutorial https://www.mapbox.com/impact-tools/sheet-mapper
    console.log("loaded");
    $(document).ready(function () {
        console.log("ready");
        $.ajax({
            type: "GET",
            url: config.CSV,
            dataType: "text",
            success: function (csvData) {
                makeGeoJSON(csvData);
            },
            error: function (request, status, error) {
                console.log(request);
                console.log(status);
                console.log(error);
            }
        });
    });

    function makeGeoJSON(csvData) {
        csv2geojson.csv2geojson(csvData, {
            latfield: "Latitude",
            lonfield: "Longitude",
            delimiter: ","
        }, function (err, data) {
            data.features.forEach(function (data, i) {
                data.properties.id = i;
            });

            geojsonData = data;
            // Add the the layer to the map
            map.addLayer({
                "id": "locationData",
                "type": "circle",
                "source": {
                    "type": "geojson",
                    "data": geojsonData
                },
                "paint": {
                    "circle-radius": [
                        "interpolate",
                        ["linear"],
                        ["zoom"],
                        10.66,
                        3,
                        14,
                        9
                      ], // size of circles
                    "circle-color": [
                        "match",
                        ["get", "Theme"],
                        ["COAST"],
                        "hsl(196, 58%, 61%)",
                        ["Historical sites"],
                        "hsl(0, 83%, 64%)",
                        ["Visitor information"],
                        "hsl(288, 68%, 68%)",
                        ["Environmental"],
                        "hsl(141, 67%, 56%)",
                        ["Other"],
                        "hsl(232, 82%, 71%)",
                        "#000000"
                      ], // color of circles
                    "circle-stroke-color": "hsl(298, 3%, 100%)",
                    "circle-stroke-width": [
                        "interpolate",
                        ["linear"],
                        ["zoom"],
                        12.5,
                        1.5,
                        15,
                        4
                      ],
                    "circle-opacity": 1
                }

            });

            map.addLayer({
                "id": "text",
                "type": "symbol",
                "source": {
                    "type": "geojson",
                    "data": geojsonData
                },
                layout: {
                     "text-field": "{Title/name}",
                     "text-size": [
                        "interpolate",
                        ["linear"],
                        ["zoom"],
                        12.5,
                        12,
                        15,
                        18
                      ],
                      "text-offset":[
                        "interpolate",
                        ["linear"],
                        ["zoom"],
                        12,
                        ["literal", [0, 0.5]],
                        15,
                        ["literal", [0, 2]]
                      ],
                     "text-justify": "center",
                     "text-anchor": "top",
                     "text-font": [
                        "Brandon Text Medium",
                        "Arial Unicode MS Regular"
                      ]
                   },
                   paint: {
                   "text-opacity":1,
                     "text-color": [
                        "match",
                        ["get", "Theme"],
                        ["COAST"],
                        "hsl(196, 24%, 35%)",
                        ["Historical sites"],
                        "hsl(0, 57%, 61%)",
                        ["Visitor information"],
                        "hsl(288, 32%, 51%)",
                        ["Environmental"],
                        "hsl(141, 31%, 48%)",
                        ["Other"],
                        "#5f6bbf",
                        "#000000"
                      ],
                     "text-halo-width": [
                        "interpolate",
                        ["linear"],
                        ["zoom"],
                        12.5,
                        1,
                        15,
                        2
                      ],
                     "text-halo-color": "hsl(0, 100%, 99%)",
                     "text-halo-blur": 0.2
                   }
                   });
        });

        map.on("click", "locationData", function (e) {
            const features = map.queryRenderedFeatures(e.point, {
                layers: ["locationData"]
            });
            const clickedPoint = features[0].geometry.coordinates;
            flyToLocation(clickedPoint, 9);
            sortByDistance(clickedPoint);
            createPopup(features[0]);
        });

        map.on("mouseenter", "locationData", function () {
            map.getCanvas().style.cursor = "pointer";
        });

        map.on("mouseleave", "locationData", function () {
            map.getCanvas().style.cursor = "";
        });
        buildLocationList(geojsonData);
    };
});

// Modal - popup for filtering results
const filterResults = document.getElementById("filterResults");
const exitButton = document.getElementById("exitButton");
const modal = document.getElementById("modal");

filterResults.addEventListener("click", () => {
    modal.classList.remove("hide-visually");
    modal.classList.add("z5");
});

exitButton.addEventListener("click", () => {
    modal.classList.add("hide-visually");
});

const title = document.getElementById("title");
title.innerText = config.title;

map.addControl(new mapboxgl.NavigationControl());

// function onYouTubeIframeAPIReady() {
//   player = new YT.Player('player', {
//     host: 'https://www.youtube.com',
//     events: {
//       'onStateChange': onPlayerStateChange
//     }
//   });
// }

// function onPlayerStateChange() {
//   console.log("YOUTUBE API");
// }

var isFullscreen = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
$(document).on('mozfullscreenchange webkitfullscreenchange fullscreenchange',function(e){
  isFullscreen = !isFullscreen;
  var css_transform;
  var element = e.target; 
  if(isFullscreen && element.nodeName === "IFRAME")
  {
    var div_clicked = e.target;
    var div = div_clicked.closest('.mapboxgl-popup');
    css_transform = div.style.transform;
    div.style.transform = "none";
  }
  else if(!isFullscreen &&  element.tagName === "IFRAME")
  {
    var div_clicked = e.target;
    var div = div_clicked.closest('.mapboxgl-popup');
    div.style.transform = css_transform;
  }
});