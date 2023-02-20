import {
    register,
    t,
    init,
    isLoading,
    getLocaleFromNavigator,
    locale
  } from "svelte-i18n";

  // note it's ending is .json, while the filename in static/ is  .json.js
  register("de", () => import("../translations/de.json"));
  register("fr", () => import("../translations/fr.json"));

  init({
    fallbackLocale: 'de',
    initialLocale: getLocaleFromNavigator(),
  })

  export {
    init,
    t,
    isLoading,
    locale
  };