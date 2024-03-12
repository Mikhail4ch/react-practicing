import styles from './Post.module.css'

const Post = ({message, like}) => {
  return (
    <div className={styles.item}>
      <img alt='ava' src='https://i.etsystatic.com/13554046/r/il/80139e/2788422650/il_1140xN.2788422650_akq7.jpg' />
      {message}
      <div>
        <span>Like </span> {like}
      </div>
    </div>
  )
}

export default Post;