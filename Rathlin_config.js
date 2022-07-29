
const config = {
    style: "mapbox://styles/jbamford/cl4idnsgn001g14qqqnnjv455",
    accessToken: "pk.eyJ1IjoiamJhbWZvcmQiLCJhIjoia0dZNENUMCJ9._cSAJxiTZhfdH6F1LhxnVw",
    CSV: "https://docs.google.com/spreadsheets/d/13sSrHjS95ZpqPo5OhdxYE87ekgSNpum28MejC-lZMSU/gviz/tq?tqx=out:csv&sheet=Sheet1",
    center: [-6.225, 5.263], //Lng, Lat
    zoom: 11.67, //Default zoom
    pitch: 50,
   
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
