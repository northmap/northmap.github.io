const config = {
    style: "mapbox://styles/jbamford/ckg0oa5iv14es19o58hvjucg2",
    accessToken: "pk.eyJ1IjoiamJhbWZvcmQiLCJhIjoia0dZNENUMCJ9._cSAJxiTZhfdH6F1LhxnVw",
    CSV: 'https://27744145-ae97-4724-afaa-408169578b05.usrfiles.com/ugd/277441_1191af4155594447af687fe4e80df900.csv', 
    center: [-7.734, 54.262], //Lng, Lat
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