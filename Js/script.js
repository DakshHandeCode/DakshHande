function addComment() {
  const commentInput = document.getElementById('commentInput');
  const commentsContainer = document.getElementById('commentsContainer');

  if (commentInput.value.trim() !== '') {
    const commentText = commentInput.value.toLowerCase();

    // Check for offensive words
    if (containsOffensiveWords(commentText)) {
      alert('Your comment contains offensive words and cannot be posted.');
    } else {
      const comment = document.createElement('div');
      comment.className = 'comment';
      comment.textContent = commentInput.value;

      const deleteButton = document.createElement('button');
      deleteButton.className = 'deleteButton';
      deleteButton.textContent = 'Delete';
      deleteButton.onclick = function() {
        deleteComment(comment);
      };

      comment.appendChild(deleteButton);
      commentsContainer.appendChild(comment);
      commentInput.value = '';
    }
  }
}

function deleteComment(comment) {
  comment.remove();
}

function containsOffensiveWords(comment) {
  const offensiveWords = ['abusive', 'offensive', 'inappropriate', 'fuck', 'customword1', 'customword2', 'गाली1', 'गाली2'];
  return offensiveWords.some(word => comment.includes(word));
}
