const blockedKeywords = [
  "adult",
  "porn",
  "sex",
  "xxx",
  "pornô",
  "porno",
  "xvideos",
  "redtube",
  "redtube.com.br",
  "xxn",
  "porndish",
  "porndude",
  "onlyfans",
  "xxxtik",
  "pornografia",
  "novinha",
  "milf",
  "bdsm",
  "scaty",
  "fetish",
  "porno",
  "lesbian",
  "lesb",
  "adulto",
  "faketaxi",
  "pornn",
  "pornnn",
  "lgbt",
  "amateur porn",
  "amador porn",
  "big ass",
  "big tits",
  "big dick",
  "anal",
  "analvids",
  "brazzers",
  "anal vids"
  // Adicione mais palavras-chave relacionadas a pornografia aqui, conforme necessário
];

function isBlockedUrl(url) {
  const lowerCaseUrl = url.toLowerCase();
  return blockedKeywords.some((keyword) => lowerCaseUrl.includes(keyword));
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && isBlockedUrl(tab.url)) {
    chrome.tabs.remove(tabId);
  }
});