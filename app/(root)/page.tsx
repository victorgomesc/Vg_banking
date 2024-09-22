import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
    const loggedIn = { firstName: 'Victor' };

  return (
    <section className="home">
        <div className="home-content">
            <HeaderBox type="greeting" title="Welcome," user={ loggedIn?.firstName || 'Guest'} 
                subtext="Acess and manage your account and trasanctions efciently." />
            
            <TotalBalanceBox 
                accounts={[]}
                totalBanks={1}
                totalCurrentBalance={1250.35}
             />
        </div>
    </section>
  )
}

export default Home