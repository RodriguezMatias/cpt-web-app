import { Glider } from "src/app/models/glider";

export const GLIDERS: Glider[] = [
    {
        model: "Grob G103 Twin Astir II",
        designator: "LV-EJB",
        image: "https://drive.google.com/uc?id=1scGfbrgTqsvfgcE4bILKANzZeVhEBEdV",
        manualList:[
          {name:"Manual de vuelo EJB (Aleman)",link:"https://drive.google.com/file/d/1Vw0pVjjdougZ-falPRtVRE52i7x20rxF/view?usp=drive_link"},
          {name:"Manual de vuelo Twin II (Ingles)",link:"https://drive.google.com/file/d/1B-ZhsByirAkh8mqSL5dcM8D8Z15jY1Js/view?usp=drive_link"},
          {name:"Manual de mantenimiento Twin II (Ingles)",link:" https://drive.google.com/file/d/19yZ5BnD6r8uE8WnZHgU--WJQ1TsBzT0e/view?usp=drive_link"},
         ],
        description: "Planeador biplaza utilizado para bautismos, escuela y vuelos deportivos."
      },
      {
        model: "ICA Is282B",
        designator: "LV-EJP",
        image: "https://drive.google.com/uc?id=1SxzhToRHB4nuigX-TKfnoL1n4j2YZCLj",
        manualList:[{name:"Manual de vuelo",link:"https://drive.google.com/file/d/1nsh3AE_l1dghLO6XHg3Aj8sHTt5zEGOb/view?usp=drive_link"},
        {name:"Manual de Mantenimiento-Partes-Tecnico (Zip)",link:"https://drive.google.com/file/d/1O__toV7_ofaUeF8Q4SdVxkEBNiIuZ4aW/view?usp=drive_link"}],
        description: "Planeador biplaza utilizado para bautismos, escuela y vuelos deportivos."
      },
      {
        model: "Smyk Pw-5",
        designator: "LV-EMW",
        image: "https://drive.google.com/uc?id=1KyqBm_If-1DWm23VUQFGKs7byO4ocbBI",
        manualList:[
          {name:"Manual de vuelo (no oficial) (Español)",link:"https://drive.google.com/file/d/168jzWGnvX2LBjrFDqvTuAvZvkMyxRTDx/view?usp=sharing"},
          {name:"Manual de mantenimiento (Ingles)",link:"https://drive.google.com/file/d/1AZT2cIGKZsIPuaRAUNshldQ5BuikWRwH/view?usp=drive_link"},
          {name:"Manual de vuelo (Ingles)",link:"https://drive.google.com/file/d/1W9xYKqvnR6mZCmO9ao9-BlQh06dmweSE/view?usp=drive_link"},
          {name:"PW5 Step by step step-by-procedure for assembly and disassembly (Ingles)",link:"https://drive.google.com/file/d/1gu1Pc40AfmX1kAoYE2Y8UpBeEuI6Jqkh/view?usp=drive_link"},
          {name:"PW5 Making and testing a removable total-energy (TE) probe (Ingles)",link:"https://drive.google.com/file/d/15MFEnIDA_-4HrhUWu8Wi0wsPL3CUHmB-/view?usp=drive_link"},
        ],

          description: "Planeador clase mundo, afectado a la escuela de vuelo, vuelos de piloto y pruebas deportivas."
      },
      {
        model: 'Grob G102 Astir Cs77 "59"',
        designator: "LV-DNH",
        image: "https://drive.google.com/uc?id=1oJVlg-yQLkybXWR2JnZk8d8iFLpz91ra",
        manualList:[{name:"Manual de vuelo",link:"https://drive.google.com/file/d/1tTe-OKSdZJXv8GBs9RvYH24e8ORNuR_P/view?usp=drive_link"}],
        description: "Planeador clase club."
      },
      {
        model: 'Aero Boero 180 ',
        designator: "LV-AOG",
        image: "",
        manualList:[],
        description: "Remolcador afectado al club de planeadores Tandil."
      }
];
