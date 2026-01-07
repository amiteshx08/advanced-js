// const posts = [
//     { title: 'Can Paddy continue his title run' , author: 'Ariel Halwani' },
//     { title: 'How much more can we expect from the CHAMPPPP!!' , author: 'Jon Anik' }
// ];

// function getPosts() {
//     /*This function setTimeout executes the task its assigned
//     only when the timer expires */

//     setTimeout(() => {
//         let output = '';
//         posts.forEach((post, index) => {
//             output += `<li>${post.title}</li>`;
//         })
//         document.body.innerHTML = output;
//     }, 1000);

// }

// function createPost(post, callback) {
//     setTimeout(() => {
//         posts.push(post);
//         callback();
//     }, 2000)
// }

// getPosts();
//  The DOM is already painted so we won't be able to see the result
// we were expecting

// expected:
// 'Can Paddy continue his title run'
// 'How much more can we expect from the CHAMPPPP!!'
// 'Tom is back'

// actual:
// 'Can Paddy continue his title run'
// 'How much more can we expect from the CHAMPPPP!!'

// createPost({ title: 'Tom is back', author: 'Chael Sonnen'}, getPosts);

const posts = [
  { title: "Can Paddy continue his title run", author: "Ariel Halwani" },
  {
    title: "How much more can we expect from the CHAMPPPP!!",
    author: "Jon Anik",
  },
];

function getPosts() {

  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      if (!error) resolve();
      else reject("Error: Something is not right");
    }, 2000);
  });
}

// createPost({ title: "Tom is back", author: "Chael Sonnen" })
//   .then(getPosts)
//   .catch((err) => console.log(err));

const promise1 = Promise.resolve('hello world');
const promise2 = 10;
const promise3 = new Promise((reject, resolve) =>{
    setTimeout(resolve, 2000, 'Goodbye');
})

Promise.all([promise1, promise2, promise3]).then((values) =>{
    console.log(values);
})