
import s from '../styles/welcome.module.css'

function Welcome() {

  let current_title = "Welcome to StoryTree"

  return (
    <main className={s.main}>
        <h1 className={s.main}>{current_title}</h1>
        <p className={s.main}>
            Your journey through the imagination starts here.<br/>
            Explore, read, write and connect with your creativity.
        </p>
    </main>
  )
}

export default Welcome