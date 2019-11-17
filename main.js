mkbook = function(word){
	var query= word.linkUrl;
	chrome.bookmarks.create({'parentId': '1',
			       'title': query,
                               'url': query});
};

chrome.contextMenus.create({
	title: "Tallenna linkki kirjanmerkkinä...",
	contexts:["link"],
	onclick: mkbook
});

