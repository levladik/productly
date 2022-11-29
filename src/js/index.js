window.onload = function () {
	console.log('Page Loaded')
	// Tags
	addTagsClickHandler();
}

const addTagsClickHandler = () => {
	document.querySelector('.strategies__tags').addEventListener('click', (e) => {
		console.log('click')
		if (e.target.classList.contains('tag')) {
			console.log('tag click')
			let clickedTag = e.target;
			removeSelectedTags();
         selectClickedTag(clickedTag);
		}
	})
}

const removeSelectedTags = () => {
	let tags = document.querySelectorAll('.strategies__tags> .tag');
	tags.forEach(tag => {
		tag.classList.remove('tag_selected');
		tag.classList.add('tag_bordered');
	})
}

const selectClickedTag = (clickedTag) => {
	clickedTag.classList.add('tag_selected');
	clickedTag.classList.remove('tag_bordered');
}