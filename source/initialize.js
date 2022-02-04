import "./angular.min.js";
import "./angular-route.min.js";

let angularModule = angular.module("ejercicioDev",["ngRoute"]);

let toastElList = [].slice.call(document.querySelectorAll('.toast'))
let toastList = toastElList.map(function (toastEl) {
  return new bootstrap.Toast(toastEl, {animation:true})
})
let notif_msg = document.getElementById("notif_msj");

export var app = angularModule;
export var toast = toastList[0];
export var toastMessage = notif_msg;
