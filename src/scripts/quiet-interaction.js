/* --------------------------------------------------------
   Quiet Interaction Script – URSIO Modul 12
   Kleine, sichere Interaktions-Hooks
-------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
  /* -------------------------------------------
     TAPZONE: simulate subtle tap-feedback
  ------------------------------------------- */
  document.querySelectorAll(".q-tapzone").forEach((el) => {
    el.addEventListener("touchstart", () => {
      el.classList.add("is-tapping");
    });
    el.addEventListener("touchend", () => {
      el.classList.remove("is-tapping");
    });
  });

  /* -------------------------------------------
     CLICK HOOK: provides optional event dispatch
  ------------------------------------------- */
  document.querySelectorAll(".q-click").forEach((el) => {
    el.addEventListener("click", () => {
      el.dispatchEvent(new CustomEvent("quiet:click"));
    });
  });
});