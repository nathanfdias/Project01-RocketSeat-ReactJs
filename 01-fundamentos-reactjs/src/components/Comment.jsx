import { Avatar } from "./Avatar"
import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./Comment.module.css"
import { useState } from "react";

// interface CommentProps {
//   content: string;
//   onDeleteComment: (comment: string) => void;
// }


export function Comment(
  // {onDeleteComment, content }: CommentProps
) {

const [likeCount, setLikeCount] = useState(0);

function handleDeleteComment(){
  onDeleteComment(content);
}

function handleLikeCount() {
  setLikeCount(likeCount + 1);
}

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/pprohem.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Pedro Paulo</strong>
              <time 
              title="04 de Novembro às 21:01h" 
              dateTime="2022-11-04 21:01:00">Cerca de 1h atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentários">
              <Trash size={24} />
            </button>
          </header>
          {/* <p>{content}</p> */}
        </div>

        <footer>
          <button onClick={handleLikeCount}>
          <ThumbsUp/> {"  "} 
           Aplaudir <span> {likeCount} </span>
          </button> 
        </footer>

      </div>

    </div>
  )
}