
const config = {
    style: "mapbox://styles/jbamford/cl4idnsgn001g14qqqnnjv455",
    accessToken: "pk.eyJ1IjoiamJhbWZvcmQiLCJhIjoiY2w2Nm8yZnNoMDV3ODNjdGRpMjVmMnFiMSJ9.UcdpyCBAekPVqaturRx5Xg",
    CSV: "https://docs.google.com/spreadsheets/d/1fq76srdzD0AR4pULNNpx_Mja0zq0vv8yfOZd39Q7RNs/gviz/tq?tqx=out:csv&sheet=Sheet1",
    center: [-6.214, 55.286], //Lng, Lat
    zoom: 12.50, //Default zoom
    pitch: 5,
   
    title: "",
    sideBarInfo: ["Subject", "Type"],
    popupInfo: ["Description",],
    filters: [
        
        {
            type: "checkbox",
            title: "Themes: ",
            columnHeader: "Type",
            listItems: ["COAST", "Walking and cycling trails", "Historical sites", "Environmental", "Other"]
        }
    ]

};
