
const config = {
    style: "mapbox://styles/jbamford/ckuiw9h5p5iew18k6sjgvqkdl",
    accessToken: "pk.eyJ1IjoiamJhbWZvcmQiLCJhIjoia0dZNENUMCJ9._cSAJxiTZhfdH6F1LhxnVw",
    CSV: "https://docs.google.com/spreadsheets/d/1fq76srdzD0AR4pULNNpx_Mja0zq0vv8yfOZd39Q7RNs/gviz/tq?tqx=out:csv&sheet=Sheet1",
    center: [-7.71333,54.27536], //Lng, Lat
    zoom: 11, //Default zoom
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
