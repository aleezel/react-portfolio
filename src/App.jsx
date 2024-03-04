import styles from './style';


import { Navbar, Home, Works, Aboutme, Footer, Button } from './components'

export const App = () =>(
  
  
    <div className='w-full overflow-hidden'>
      <div className={`${styles.paddingX} $styles.flexCenter`}>

        <Navbar />
        
      </div>

      <div className={` bg-slate-400 ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Home />
          
        </div>
      </div>
      <Works />
    </div>
  );

  export default App