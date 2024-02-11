import { returnTabs } from "./background.js";


async function getCurrentTab() {
    let query = {active:true,currentWindow:true};
    let [tab] = await chrome.tabs.query(queryOptions);
    console.log(tab);
    return tab;
}