import React from 'react';
import '../Styles/Box.css'

const Box = () => {
  return (
    <>
{/* https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80 */}
      <div className='Box'>
        <div className="card">
          <img src="./cricket.jpg" alt=" ---------" />
          <div className='text'>
            <h2>Cricket</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos excepturi nostrum necessitatibus doloremque? Quasi non molestias odio.
              Quasi non molestias odio.</p>
              
          </div>

        </div>
      </div>

    </>
  );
};

export default Box;
