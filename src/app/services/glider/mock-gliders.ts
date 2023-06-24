import { Glider } from "src/app/models/glider";

export const GLIDERS: Glider[] = [
    {
        model: "Grob G103 Twin Astir II",
        designator: "LV-EJB",
        image: "./assets/LV-EJB/photo.png",
        manualList:[{name:"Manual de usuario",link:"https://drive.google.com/file/d/1qhl45ohaZ9qaEeeAyUp-xEWh18J9zIlb/view?usp=drive_link"}],
        description: "Planeador biplaza utilizado para bautismos, escuela y vuelos deportivos."
      },
      {
        model: "ICA Is282B",
        designator: "LV-EJP",
        image: "./assets/LV-EJP.png",
        manualList:[{name:"Manual de usuario",link:"LV-EJP-user-manual.pdf"},
        {name:"Manual de mantenimiento",link:"LV-EJP-maintenance-manual.pdf"}],
        description: "Planeador biplaza utilizado para bautismos, escuela y vuelos deportivos."
      },
      {
        model: "Smyk Pw-5",
        designator: "LV-EMW",
        image: "./assets/LV-EMW.png",
        manualList:[],
        description: "Planeador clase mundo que se usa para x y j y asdf"
      }
];
