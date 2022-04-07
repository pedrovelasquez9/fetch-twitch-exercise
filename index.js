const titleElem = document.getElementById("post-title");
const contentElem = document.getElementById("post-content");
const BASE_URL = "https://jsonplaceholder.typicode.com/posts/";
let actualPostId = 1;

const fetchBlogPost = async (postId) => {
  const postContent = await (await fetch(`${BASE_URL}${postId}`)).json();
  return postContent;
};

const nextPost = async (postId = actualPostId) => {
  actualPostId++;
  const data = await fetchBlogPost(postId);
  const { title, body } = data;
  titleElem.innerText = title;
  contentElem.innerText = body;
};

const previousPost = async (postId = actualPostId) => {
  actualPostId--;
  const data = await fetchBlogPost(postId);
  const { title, body } = data;
  titleElem.innerText = title;
  contentElem.innerText = body;
};

nextPost();
