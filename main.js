function getPost() {
  const postId = document.getElementById("postIdInput").value;

  if (postId >= 1 && postId <= 100) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        return response.json();
      })
      .then((post) => {
        const postContainer = document.getElementById("postContainer");
        postContainer.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            <button onclick="getComments(${post.id})">Отримати комментарії</button>
          `;
      })
      .catch((error) => {
        console.log("Виникла ошибка:", error);
      });
  } else {
    console.log("Невірний ідентифікатор поста. Введіть число від 1 до 100.");
  }
}

function getComments(postId) {
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Ошибка : ${response.status}`);
      }
      return response.json();
    })
    .then((comments) => {
      console.log("Коментарії:", comments);
    })
    .catch((error) => {
      console.log("Ошибка коментаря:", error);
    });
}
