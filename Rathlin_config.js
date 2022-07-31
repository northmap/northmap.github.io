
const config = {
    style: "mapbox://styles/jbamford/cl4idnsgn001g14qqqnnjv455",
    accessToken: "pk.eyJ1IjoiamJhbWZvcmQiLCJhIjoiY2w2Nm8yZnNoMDV3ODNjdGRpMjVmMnFiMSJ9.UcdpyCBAekPVqaturRx5Xg",
    CSV: "https://docs.google.com/spreadsheets/d/13sSrHjS95ZpqPo5OhdxYE87ekgSNpum28MejC-lZMSU/gviz/tq?tqx=out:csv&sheet=Sheet1",
    center: [-6.214, 55.286], //Lng, Lat
    zoom: 12.50, //Default zoom
    pitch: 5,
   
    title: "",
    sideBarInfo: ["Title/name", "Theme"],
    popupInfo: ["Title/name",],
    filters: [
        
        {
            type: "checkbox",
            title: "Themes: ",
            columnHeader: "Theme",
            listItems: ["COAST", "Walking and cycling trails", "Historical sites", "Environmental", "Other"]
        }
    ]

};
