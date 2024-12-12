const UrlParser = {
  parseActiveUrlWithCombiner() {
    const url = window.location.hash.slice(1);
    const splitedUrl = this._urlSplitter(url);
    return this._urlCombiner(splitedUrl);
  },

  parseActiveUrlWithoutCombiner() {
    const url = window.location.hash.slice(1);
    return this._urlSplitter(url);
  },

  _urlSplitter(url) {
    const urlsSplits = url.split('/');

    const resource = urlsSplits[1] || null;
    let id = null;
    let verb = null;

    // Check if the second part is actually an ID
    if (urlsSplits[2] && !isNaN(parseInt(urlsSplits[2]))) {
      id = urlsSplits[2]; // If it's a number, it's the ID
      verb = urlsSplits[3] || null; // Check for a verb
    } else {
      verb = urlsSplits[2] || null; // If it's not a number, it's the verb
    }

    return {
      resource,
      id,
      verb,
    };
  },

  _urlCombiner(splitedUrl) {
    let url = `/${splitedUrl.resource || ''}`;
    if (splitedUrl.id) {
      url += `/${splitedUrl.id}`;
    }
    if (splitedUrl.verb) {
      url += `/${splitedUrl.verb}`;
    }
    return url;
  },
};

export default UrlParser;
