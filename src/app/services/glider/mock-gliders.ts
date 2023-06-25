import { Glider } from "src/app/models/glider";

export const GLIDERS: Glider[] = [
    {
        model: "Grob G103 Twin Astir II",
        designator: "LV-EJB",
        image: "./assets/LV-EJB/photo.png",
        manualList:[{name:"Manual de vuelo",link:"https://drive.google.com/file/d/1qhl45ohaZ9qaEeeAyUp-xEWh18J9zIlb/view?usp=drive_link"}],
        description: "Planeador biplaza utilizado para bautismos, escuela y vuelos deportivos."
      },
      {
        model: "ICA Is282B",
        designator: "LV-EJP",
        image: "./assets/LV-EJP/LV-EJP.png",
        manualList:[{name:"Manual de vuelo",link:"./assets/LV-EJP/IS28b2 LV-EJP.pdf"}],
        description: "Planeador biplaza utilizado para bautismos, escuela y vuelos deportivos."
      },
      {
        model: "Smyk Pw-5",
        designator: "LV-EMW",
        image: "./assets/LV-EMW/LV-EMW.png",
        manualList:[{name:"Manual de vuelo (no oficial)",link:"./assets/LV-EMW/PW5 Manual de Vuelo (no oficial).pdf"}],
        description: "Planeador clase mundo que se usa para x y j y asdf"
      },
      {
        model: 'Grob G102 Astir Cs77 "59"',
        designator: "LV-DNH",
        image: "",
        manualList:[],
        description: "Planeador clase club que se usa para x y j y asdf"
      }
];
