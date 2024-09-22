import { formatAmount } from '@/lib/utils'
import React from 'react'
import AnimatedCounter from './AnimatedCounter'

const TotalBalanceBox = ({ accounts = [], totalBanks, totalCurrentBalance}: TotlaBalanceBoxProps) => {
  return (
    <section className="total-balance">
        <div className="total-balance-chart">
            {/* Doughnutchat */}
        </div>

        <div className="flex flex-col gap-6">
            <h2 className="header-2">
                Banks acounts:{totalBanks}
            </h2>

            <div className="flex flex-col gap-2">
                <p className="total-balance-label">
                    Total Current Balance
                </p>

                <p className="total-balance-amount flex-center gap-2">
                    <AnimatedCounter amount={totalCurrentBalance} />
                    {/*formatAmount(totalCurrentBalance)*/}
                </p>

            </div>
        </div>
    </section>
  )
}

export default TotalBalanceBox