/*!
 * Bootstrap-Dark-5 v1.1.3 (https://vinorodrigues.github.io/bootstrap-dark-5/)
 * Copyright 2021 Vino Rodrigues
 * Licensed under MIT (https://github.com/vinorodrigues/bootstrap-dark-5/blob/main/LICENSE.md)
 */
"use strict";
class DarkMode {
  constructor() {
    (this._hasGDPRConsent = !1),
      (this.cookieExpiry = 365),
      "loading" === document.readyState
        ? document.addEventListener("DOMContentLoaded", function () {
            DarkMode.onDOMContentLoaded();
          })
        : DarkMode.onDOMContentLoaded();
  }
  get inDarkMode() {
    return DarkMode.getColorScheme() == DarkMode.VALUE_DARK;
  }
  set inDarkMode(e) {
    this.setDarkMode(e, !1);
  }
  get hasGDPRConsent() {
    return this._hasGDPRConsent;
  }
  set hasGDPRConsent(e) {
    if (((this._hasGDPRConsent = e), e)) {
      const e = DarkMode.readCookie(DarkMode.DATA_KEY);
      e && (DarkMode.saveCookie(DarkMode.DATA_KEY, "", -1), localStorage.setItem(DarkMode.DATA_KEY, e));
    } else {
      const e = localStorage.getItem(DarkMode.DATA_KEY);
      e && (localStorage.removeItem(DarkMode.DATA_KEY), DarkMode.saveCookie(DarkMode.DATA_KEY, e));
    }
  }
  get documentRoot() {
    return document.getElementsByTagName("html")[0];
  }
  static saveCookie(e, o = "", t = 365) {
    let a = "";
    if (t) {
      const e = new Date();
      e.setTime(e.getTime() + 24 * t * 60 * 60 * 1e3), (a = "; expires=" + e.toUTCString());
    }
    document.cookie = e + "=" + o + a + "; SameSite=Strict; path=/";
  }
  saveValue(e, o, t = this.cookieExpiry) {
    this.hasGDPRConsent ? DarkMode.saveCookie(e, o, t) : localStorage.setItem(e, o);
  }
  static readCookie(e) {
    const o = e + "=",
      t = document.cookie.split(";");
    for (let e = 0; e < t.length; e++) {
      const a = t[e].trim();
      if (a.startsWith(o)) return a.substring(o.length);
    }
    return "";
  }
  readValue(e) {
    if (this.hasGDPRConsent) return DarkMode.readCookie(e);
    {
      const o = localStorage.getItem(e);
      return o || "";
    }
  }
  eraseValue(e) {
    this.hasGDPRConsent ? this.saveValue(e, "", -1) : localStorage.removeItem(e);
  }
  getSavedColorScheme() {
    const e = this.readValue(DarkMode.DATA_KEY);
    return e || "";
  }
  getPreferedColorScheme() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? DarkMode.VALUE_DARK : window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? DarkMode.VALUE_LIGHT : "";
  }
  setDarkMode(e, o = !0) {
    const t = document.querySelectorAll("[data-" + DarkMode.DATA_SELECTOR + "]");
    if (0 == t.length) e ? (this.documentRoot.classList.remove(DarkMode.CLASS_NAME_LIGHT), this.documentRoot.classList.add(DarkMode.CLASS_NAME_DARK)) : (this.documentRoot.classList.remove(DarkMode.CLASS_NAME_DARK), this.documentRoot.classList.add(DarkMode.CLASS_NAME_LIGHT));
    else for (let o = 0; o < t.length; o++) t[o].setAttribute("data-" + DarkMode.DATA_SELECTOR, e ? DarkMode.VALUE_DARK : DarkMode.VALUE_LIGHT);
    o && this.saveValue(DarkMode.DATA_KEY, e ? DarkMode.VALUE_DARK : DarkMode.VALUE_LIGHT);
  }
  toggleDarkMode(e = !0) {
    let o;
    const t = document.querySelector("[data-" + DarkMode.DATA_SELECTOR + "]");
    (o = t ? t.getAttribute("data-" + DarkMode.DATA_SELECTOR) == DarkMode.VALUE_DARK : this.documentRoot.classList.contains(DarkMode.CLASS_NAME_DARK)), this.setDarkMode(!o, e);
  }
  resetDarkMode() {
    this.eraseValue(DarkMode.DATA_KEY);
    const e = this.getPreferedColorScheme();
    if (e) this.setDarkMode(e == DarkMode.VALUE_DARK, !1);
    else {
      const e = document.querySelectorAll("[data-" + DarkMode.DATA_SELECTOR + "]");
      if (0 == e.length) this.documentRoot.classList.remove(DarkMode.CLASS_NAME_LIGHT), this.documentRoot.classList.remove(DarkMode.CLASS_NAME_DARK);
      else for (let o = 0; o < e.length; o++) e[o].setAttribute("data-" + DarkMode.DATA_SELECTOR, "");
    }
  }
  static getColorScheme() {
    const e = document.querySelector("[data-" + DarkMode.DATA_SELECTOR + "]");
    if (e) {
      const o = e.getAttribute("data-" + DarkMode.DATA_SELECTOR);
      return o == DarkMode.VALUE_DARK || o == DarkMode.VALUE_LIGHT ? o : "";
    }
    return darkmode.documentRoot.classList.contains(DarkMode.CLASS_NAME_DARK) ? DarkMode.VALUE_DARK : darkmode.documentRoot.classList.contains(DarkMode.CLASS_NAME_LIGHT) ? DarkMode.VALUE_LIGHT : "";
  }
  static updatePreferedColorSchemeEvent() {
    let e = darkmode.getSavedColorScheme();
    e || ((e = darkmode.getPreferedColorScheme()), e && darkmode.setDarkMode(e == DarkMode.VALUE_DARK, !1));
  }
  static onDOMContentLoaded() {
    let e = darkmode.readValue(DarkMode.DATA_KEY);
    e || ((e = DarkMode.getColorScheme()), e || (e = darkmode.getPreferedColorScheme()));
    const o = e == DarkMode.VALUE_DARK;
    darkmode.setDarkMode(o, !1),
      window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function () {
          DarkMode.updatePreferedColorSchemeEvent();
        });
  }
}
(DarkMode.DATA_KEY = "bs.prefers-color-scheme"), (DarkMode.DATA_SELECTOR = "bs-color-scheme"), (DarkMode.VALUE_LIGHT = "light"), (DarkMode.VALUE_DARK = "dark"), (DarkMode.CLASS_NAME_LIGHT = "light"), (DarkMode.CLASS_NAME_DARK = "dark");
const darkmode = new DarkMode();
