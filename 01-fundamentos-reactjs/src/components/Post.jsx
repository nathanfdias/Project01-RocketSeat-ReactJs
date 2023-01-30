import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Post({author, publishedAt, content}) {
    const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit'
    }).format(publishedAt);

    const [comments, setComments] = useState([
        "Post muito bacana, hein!?"
      ])
    
      const [newCommentText, setNewCommentText] = useState("");

      function handleCreateNewComment(){
        event.preventDefault();
    
        // Programação Imperativa - const newCommentText = event.target.commentText.value
    
        setComments([...comments, newCommentText]);
        setNewCommentText("")
    
        // Programação Imperativa - event.target.commentText.value = "";
    
      }
    
      function handleNewCommentChange(){
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
        
      }
    
      function deleteComment(){
        const commentsWithoutDeletedOne = comments.filter(comment => {
          return comment !== commentToDelete;
        })
        setComments(commentsWithoutDeletedOne);
      }
    
      function handleNewCommentInvalid(){
        event.target.setCustomValidity("Este campo é obrigatório!")
      }
    
      const isNewCommentEmpty = newCommentText.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={
                        author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{
                        author.name}</strong>
                        <span>{
                        author.role}</span>
                    </div>
                </div>

                <time dateTime="2022-05-11 08:13:30" title='11 de maio de 2022'>{publishedDateFormatted}</time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if(line.type === 'paragraph'){
                        return <p>{line.content}</p>
                    } else if(line.type === 'link'){
                        return <p><a href='#'>{line.content}</a></p>
                    }
                })}
                <p className={styles.hashtag}>#novoprojeto #nlw #rocketseat</p>
            </div>
            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>
                    Deixe seu Feedback
                </strong>
                <textarea placeholder="Deixe seu comentário" />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>

                <div className={styles.commentList}>
                    {comments.map(comment => {
                        return <Comment />
                    })}
                </div>
            </form>
        </article>
    )
}