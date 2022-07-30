
const config = {
    style: "mapbox://styles/jbamford/cl4idnsgn001g14qqqnnjv455",
    accessToken: "pk.eyJ1IjoiamJhbWZvcmQiLCJhIjoiY2w2Nm8yZnNoMDV3ODNjdGRpMjVmMnFiMSJ9.UcdpyCBAekPVqaturRx5Xg",
    CSV: "https://docs.google.com/spreadsheets/d/13sSrHjS95ZpqPo5OhdxYE87ekgSNpum28MejC-lZMSU/gviz/tq?tqx=out:csv&sheet=Sheet1",
    center: [-6.207, 5.283], //Lng, Lat
    zoom: 12.50, //Default zoom
    pitch: 5,
   
    title: "",
    sideBarInfo: ["Subject", "Type"],
    popupInfo: ["Subject",],
    filters: [
        
        {
            type: "checkbox",
            title: "Themes: ",
            columnHeader: "Type",
            listItems: ["At Home and on the Land", "Built and Industrial", "Cultural", "Historical & Archaeological", "Natural"]
        }
    ]

};
