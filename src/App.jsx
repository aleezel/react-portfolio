import styles from './style';

import { Navbar, Home, Works, Aboutme, Footer, Button } from './components'

export const App = () =>(
  
  
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} $styles.flexCenter`}>

        <Navbar />
        
      </div>

      <div className={` bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Home />
          <Works />
          <Aboutme />
          <Button />
          <Footer />
        </div>
      </div>
    </div>
  );

  export default App