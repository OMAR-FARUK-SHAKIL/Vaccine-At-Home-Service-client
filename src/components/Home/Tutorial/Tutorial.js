import React from 'react';
import { ReactVideo, YoutubePlayer } from "reactjs-media";

const Tutorial = () => {
    return (
        <section style={{backgroundColor:'#ECD8D4'}} className="p-3 bg-gradient text-center">
            <h3 style={{color:'red'}}>Watch the videos and know more</h3>
            <div>
            <YoutubePlayer
                src="https://www.youtube.com/watch?v=-UJ_LBVS8qU" // Reqiured
                width={750}
                height={600}
            />
        </div>
        </section>
    );
};

export default Tutorial;