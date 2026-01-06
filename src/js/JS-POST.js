const refs = {
  form: document.querySelector('.js-form'),
  list: document.querySelector('.js-list'),
};

refs.form.addEventListener('submit', onFormSubmit);

async function onFormSubmit(evt) {
  evt.preventDefault();

  const form = evt.currentTarget;

  const postData = {
    title: form.elements.title.value,
    body: form.elements.body.value,
  };

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      throw new Error(response.status);
    }

    const createdPost = await response.json();
    renderPost(createdPost);

    form.reset();
  } catch (error) {
    console.log('Error', error);
  }
}

function renderPost(post) {
  const li = document.createElement('li');
  li.textContent = post.title;
  refs.list.prepend(li);
}
