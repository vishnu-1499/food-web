import React from 'react';
import TopBB from '../images/top-bb.jpg';
import './About.css';

function About() {
  return (
    <div className='about'>
        <div className='topSide' style={{ backgroundImage: `url(${TopBB})`}}>

        </div>
        <div className='bottomSide'>
            <h1> About US</h1>
            <p> Biryani is a mixed rice dish that’s popular in many parts of India, Pakistan, Afghanistan, and Iran. It’s an aromatic dish and is usually cooked with meat, such as chicken, mutton, or lamb. You can also make vegetarian biryanis, using vegetables or dal instead of the meat. Some of the other popular ingredients in biryani include potatoes, eggs, cashews, and whole spices. However, it is a multi-cultural dish and there are many versions of it all over the world.
                <br />
                And, to add to the taste, it is served with an assortment of vegetables and raita. In the Hyderabadi biryani, the rice is cooked with meat, onions, and spices and is smothered in ghee. The raita is a concoction of yogurt, cucumber, mint leaves, coriander leaves, green chilies, and spices.
                <br />
                Chicken Biryani is one of the most popular dishes all over the world. It is prepared in different ways in different countries and is a popular dish in Indian cuisine.
                <br />
                It is basically a combination of spices, rice, and boneless chicken. It can be eaten with salad, raita, or even yogurt. Often saffron, a spice with a distinct aroma and taste, is added to enhance the biryani’s appearance and flavor. Chicken biryani is considered a very rich dish and is usually eaten on special occasions.
            </p>
        </div>
    </div>
  )
}

export default About;