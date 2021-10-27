
const config = {
    style: "mapbox://styles/jbamford/ckuiw9h5p5iew18k6sjgvqkdl",
    accessToken: "pk.eyJ1IjoiamJhbWZvcmQiLCJhIjoia0dZNENUMCJ9._cSAJxiTZhfdH6F1LhxnVw",
    CSV: "https://docs.google.com/spreadsheets/d/1yg0yXP1qXZWMeFvFmxhHLmWlqRZ9FX4Likhe6zznkDo/gviz/tq?tqx=out:csv&sheet=Sheet1",
    center: [-7.647005, 54.186177], //Lng, Lat
    zoom: 9.24, //Default zoom
    bearing: 19.20,
    pitch: 32.50,
   
    title: "",
    sideBarInfo: ["Title English", "Poet"],
    popupInfo: ["Title English",],
    filters: [
        
        {
            type: "checkbox",
            title: "Themes: ",
            columnHeader: "Type",
            listItems: ["At Home and on the Land", "Built and Industrial", "Cultural", "Historical & Archaeological", "Natural"]
        }
    ]

};
