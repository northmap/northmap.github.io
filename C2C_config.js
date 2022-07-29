
const config = {
    style: "mapbox://styles/jbamford/ckg0oa5iv14es19o58hvjucg2",
    accessToken: "pk.eyJ1IjoiamJhbWZvcmQiLCJhIjoiY2w2Nm8yZnNoMDV3ODNjdGRpMjVmMnFiMSJ9.UcdpyCBAekPVqaturRx5Xg",
    CSV: "https://docs.google.com/spreadsheets/d/13sSrHjS95ZpqPo5OhdxYE87ekgSNpum28MejC-lZMSU/gviz/tq?tqx=out:csv&sheet=Sheet1",
    center: [-7.734, 54.262], //Lng, Lat
    zoom: 11, //Default zoom
    pitch: 10,
   
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
