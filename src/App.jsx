import styles from './style';
import Navbar from './components/navbar'

export const App = () =>(
  
  
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} $styles.flexCenter`}>

        <Navbar />
        
      </div>

      <div className={` bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <h1>Main section</h1>
        </div>
      </div>
    </div>
  );

  export default App