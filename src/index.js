const refs = {
  button: document.querySelector('.js-load'),
  list: document.querySelector('.js-list'),
};
refs.button.addEventListener('click', loadPosts);

async function loadPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=20');

    if (!response.ok) {
      throw new Error(response.status);
    }

    const posts = await response.json();
    renderPosts(posts);
  } catch (error) {
    console.log('помилка', error);
  }
}

function renderPosts(posts) {
  refs.list.innerHTML = '';

  posts.forEach(post => {
    const li = document.createElement('li');
    li.textContent = post.body;
    refs.list.appendChild(li);
  });
}
