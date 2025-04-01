import React, { useState } from 'react';
import path from '../assets/images/Path.svg';
import arrow from '../assets/images/arrow_forward_17dp_473BF0_FILL0_wght400_GRAD0_opsz20.svg';

const Pricing = ({ onSelectPlan }) => {
   const [isMonthly, setIsMonthly] = useState(true);

    const monthlyPrices = [
       {
        price: '₦7,500',
        duration: '6 mon',
        type: 'Artist',
        description: 'For Independent Artists that want to get their work out there',
        pricing: 'Affordable Pricing',
        analytics: 'Basic Analytics',
        releases: 'Limited releases',
        users: 'Single Artist Focus'
       },
       {
        price: '₦19,000',
        duration: 'month',
        type: 'Base',
        description: 'For most businesses that want to optimize web queries',
        pricing: 'All limited links',
        analytics: 'Own analytics platform',
        releases: 'Optimize hashtags',
        users: 'Unlimited users'
       },
       {
        price: '₦38,000',
        duration: 'month',
        type: 'Pro',
        description: 'For most businesses that want to optimize web queries',
        pricing: 'All limited links',
        analytics: 'Own analytics platform',
        releases: 'Optimize hashtags',
        users: 'Unlimited users',
        popular: true
       },
       {
        price: '₦76,000',
        duration: 'month',
        type: 'Enterprise',
        description: 'For most businesses that want to optimize web queries',
        pricing: 'All limited links',
        analytics: 'Own analytics platform',
        releases: 'Optimize hashtags',
        users: 'Unlimited users'
       }
    ];

    const yearlyPrices = [
        {
         price: '₦76,000',
         duration: '6 yr',
         type: 'Artist',
         description: 'For Independent Artists that want to get their work out there',
         pricing: 'Affordable Pricing',
         analytics: 'Basic Analytics',
         releases: 'Limited releases',
         users: 'Single Artist Focus'
        },
        {
         price: '₦190,000',
         duration: 'year',
         type: 'Base',
         description: 'For most businesses that want to optimize web queries',
         pricing: 'All limited links',
         analytics: 'Own analytics platform',
         releases: 'Optimize hashtags',
         users: 'Unlimited users'
        },
        {
         price: '₦380,000',
         duration: 'year',
         type: 'Pro',
         description: 'For most businesses that want to optimize web queries',
         pricing: 'All limited links',
         analytics: 'Own analytics platform',
         releases: 'Optimize hashtags',
         users: 'Unlimited users'
        },
        {
         price: '₦760,000',
         duration: 'year',
         type: 'Enterprise',
         description: 'For most businesses that want to optimize web queries',
         pricing: 'All limited links',
         analytics: 'Own analytics platform',
         releases: 'Optimize hashtags',
         users: 'Unlimited users',
         popular: true
        }
     ];

     const plans = isMonthly ? monthlyPrices : yearlyPrices;

  return (
    <section className='pricing'>
      <div className="pricing-container">
         <article className='header'>
            <span>PRICING</span>
            <h1>Our works describe why we are the best in the business</h1>
         </article>

         <div className="toggle-switch">
            <button 
            className={`toggle-button btn-month ${isMonthly ? 'active' : ''}`}
            onClick={() => setIsMonthly(true)}
            >
                Monthly 
            </button>

            <button
             className={`toggle-button ${!isMonthly ? 'active' : ''}`}
             onClick={() => setIsMonthly(false)}
            >
                Yearly
            </button>
         </div>

         <div className="plans">
            {
                plans.map((plan, index) => (
                    <div
                      key={index}
                      className={`plan ${plan.popular ? 'popular-plan' : ''}`}
                    >
                        <div className="move">{plan.popular && <div className="most-popular-label">Most Popular</div>}</div>
                        <div className="head">
                        <h3>{plan.price}</h3>
                        <p>/{plan.duration}</p>
                        </div>

                        <article>
                            <h3>{plan.type}</h3>
                            <p>{plan.description}</p>
                        </article>

                        <ul>
                            <li><img src={path} alt="" />{plan.pricing}</li>
                            <li><img src={path} alt="" />{plan.analytics}</li>
                            <li><img src={path} alt="" />Chat Support</li>
                            <li><img src={path} alt="" />{plan.releases}</li>
                            <li><img src={path} alt="" />{plan.users}</li>
                        </ul>

                        <button className="btn-plan" onClick={() => onSelectPlan(plan)}>Choose plan</button>
                    </div>
                ))
            }
         </div>
         <div className="works-button">
         <button className='btn-works'>See all works <img src={arrow} alt="" /></button>
         </div>
      </div>
    </section>
  );
};

export default Pricing;