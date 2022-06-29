import React from 'react';
import imegas from "../imegas/1.jpg";
import imega from "../imegas/2.jpg";
import imeg from "../imegas/3.jpg";



function History() {
  return (
    <div className='wrapper'>
      <div className='section1'>
        <h6 className='h6'><span>The History</span> Of Food Track </h6>
        <p className='p1'>
        Once upon a time – in 1866, actually – there was a rancher named Charles Goodnight. The Internet calls him, “the father of the Texas Panhandle.” It’s been claimed that he’s the best-known rancher in Texas. He was a colorful character. It was once common knowledge that he smoked over 50 cigars a day and at 91 years young, he married his 26-year-old nurse. While all this is true, there is one particular legacy he left behind that has influenced the hospitality industry today: he invented the original food truck, the chuck wagon.
        </p>
        <div className='imgg1'><img src={imegas} /></div>
        <p className='p2'>
        How did the chuck wagon have a lasting impact on our 21st century culinary and business choices, you ask? Good question. The chuck wagon was essentially a portable kitchen. Goodnight crafted it for his first cattle drive, a months long trip where he wasn’t able to use rail, the common transportation at the time. Thus, Goodnight modified an old army surplus wagon. He thought of almost everything. He equipped the wagon with shelves, storage space, a hinged lid for counter space, a water barrel and even a canvas to haul firewood. The food he brought along was either preserved – think dried beans, salted meat, corn meal… yum – or gathered as he went along.
        </p>
        <div className='imgg2'><img src={imega} /></div>
        <p className='p3'>
        Then in 1894, according to mobile-cuisine.com, sausage vendors emerged along the campuses of Ivy League Universities. Finally, sealing the roadside grub trend, in 1936, Oscar Mayer rolled out the first portable hot dog cart, The Weiner Mobile. And yes, you guessed it; the Weiner Mobile looks exactly like you think it would look like. (For those with insatiable curiosity, you can see the entire fleet of Weiner mobiles through the ages at this link. It’s fascinating… really.)
        </p>
        <div className='imgg3'><img src={imeg} /></div>

      </div>
    </div>
  )
}

export default History;