import { rmfbytucansilver } from "./module/config.js";
import { RMFbyTucanSilverItemSheet } from "./module/sheets/RMFbyTucanSilverItemSheet.js";

Hooks.once("init", function  () {
    console.log("rmfbytucansilver | Initialising RoleMaster Fantasy System by TucanSilver");

    CONFIG.rmfbytucansilver = rmfbytucansilver;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("rmfbytucansilver", RMFbyTucanSilverItemSheet, { makeDefault: true });
});