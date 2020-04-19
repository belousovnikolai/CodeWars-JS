function search(searchTerm, TITLES) {
    return TITLES.filter((title) => new RegExp(searchTerm, "i").test(title));
}

module.exports = search;
