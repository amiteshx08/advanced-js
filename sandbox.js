const posts = [
    { title: 'Can Paddy continue his title run' , author: 'Ariel Halwani' },
    { title: 'How much more can we expect from the CHAMPPPP!!' , author: 'Jon Anik' }
];

function getPosts() {
    /*This function setTimeout executes the task its assigned 
    only when the timer expires */

    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        })
        document.body.innerHTML = output;
    }, 1000);

}

function createPost(post) {
    setTimeout(() => { 
        posts.push(post);
    }, 2000)
}

getPosts();
/* The DOM is already painted so we won't be able to see the result
we were expecting

expected:
'Can Paddy continue his title run'
'How much more can we expect from the CHAMPPPP!!'
'Tom is back'

actual:
'Can Paddy continue his title run'
'How much more can we expect from the CHAMPPPP!!'*/

createPost({ title: 'Tom is back', author: 'Chael Sonnen'});
