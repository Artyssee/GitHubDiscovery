'use strict'

// Get submit action from from

window.onload = function() {

let gitHubForm = $('#gitForm');
let gitHubFormSearch = $('#gitFormSub');
let gitHubUserContainer = $('.githubuser-container');
let satusOrb = $('.githubtool-form__status-orb')

$(document).ready(function(e){
	let createContent = 'No user found';
	gitHubUserContainer.append(createContent);
	gitHubForm.on('submit', function() {
		let createContent = '';
		gitHubUserContainer.append(createContent);
		let gitHubUser = (gitHubFormSearch.val());
		getUserInfo(gitHubUser);
		return false;
	});
});

function getUserInfo(gitHubUser) {


	$.get(`https://api.github.com/users/${gitHubUser}`, function( data ) {
		return data;
	})
	.done(function( data ) {
		console.log(data);
		createContent = `
	<div class="githubuser-group">
		<img class="githubuser-group__image" src="${data.avatar_url}" alt="" srcset="">
	</div>
	<div class="githubuser-group">
		<label class="label githubuser-container__label" for="name">Name</label>
		<p class="heading heading--primary">${data.name}</p>
	</div>
	<div class="githubuser-group">
		<label class="label githubuser-container__label" for="username">Username</label>
		<p class="heading heading--primary">${data.login}</p>
	</div>
	<div class="githubuser-group">
		<label class="label githubuser-container__label" for="location">Location</label>
		<p class="heading heading--primary">${data.location}</p>
	</div>
	<div class="githubuser-group">
		<label class="label githubuser-container__label" for="blog">Blog</label>
		<p class="heading heading--primary">${data.blog}</p>
	</div>
	<div class="githubuser-group">
		<label class="label githubuser-container__label" for="bio">Bio</label>
		<p class="paragraph">${data.bio}</p>
	</div>
	<div class="githubuser-group">
		<label class="label githubuser-container__label" for="followers">Followers</label>
		<div class="githubuser-image-container">
			<div class="githubuser-image-container">
				<img class="githubuser-image-container__image" src="./dist/assets/img/profile.jpeg" alt="" srcset="">
			</div>
		</div>
	</div>
	<div class="githubuser-group">
		<label class="label githubuser-container__label" for="following">Following</label>
		<div class="githubuser-image-container">
			<img class="githubuser-image-container__image" src="./dist/assets/img/profile.jpeg" alt="" srcset="">
		</div>
	</div>`;
		gitHubUserContainer.append(createContent);
		return false;
	})

	.fail(function() {
		alert('no');
	})

	.always(function() {
		alert('finishhed');
	});
}
}