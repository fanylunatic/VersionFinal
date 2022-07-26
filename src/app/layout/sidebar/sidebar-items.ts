import { RouteInfo } from "./sidebar.metadata";
export const ROUTES: RouteInfo[] = [
  
  {
    path: "",
    title: "Administración ",
    moduleName: "",
    iconType: "feather",
    icon: "monitor",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Admin"],
    submenu: [
      {
    path: "/administracion/grupo",
    title: "Administracion de Grupos",
    moduleName: "",
    iconType: "",
    icon: "",
    class: "ml-menu",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: [""],
    submenu: []
      },
      {
    path: "/administracion/materia",
    title: "Administracion de Materias",
    moduleName: "",
    iconType: "",
    icon: "",
    class: "ml-menu",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: [""],
    submenu: []
      },
      {
    path: "/administracion/ciclo",
    title: "Administracion de Ciclos",
    moduleName: "",
    iconType: "",
    icon: "",
    class: "ml-menu",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: [""],
    submenu: []
      },
      {path: "/administracion/alumno",
    title: "Administracion de Alumnos",
    moduleName: "",
    iconType: "",
    icon: "",
    class: "ml-menu",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: [""],
    submenu: []
      },
      {path: "/administracion/profesor",
    title: "Administracion de Profesores",
    moduleName: "",
    iconType: "",
    icon: "",
    class: "ml-menu",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: [""],
    submenu: []
      }
    
    ]
  },
  {
    path: "",
    title: "Alta de usuarios",
    moduleName: "dashboard",
    iconType: "feather",
    icon: "user-plus",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Admin"],
    submenu: [
      {
        path: "/credenciales/registro",
        title: "Registrar Usuario",
        moduleName: "dashboard",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      }
      
    ],
  },

  // Employee Modules
  {
    path: "/profesor/dashboard",
    title: "MENUITEMS.PROFESOR.DASHBOARD",
    moduleName: "dashboard",
    iconType: "feather",
    icon: "airplay",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Profesor"],
    submenu: [],
  },

  // Client Modules
  {
    path: "/alumno/dashboard",
    title: "MENUITEMS.ALUMNO.DASHBOARD",
    moduleName: "dashboard",
    iconType: "feather",
    icon: "airplay",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Alumno"],
    submenu: [],
  },

];