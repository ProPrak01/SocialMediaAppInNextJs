import React,{useContext} from 'react';
import { UserContext } from '../context';
import {useRouter} from 'next/router';
import moment from "moment";
const PeopleComp = ({people}) => {
   const defaultImage = "https://cdn-icons-png.flaticon.com/512/149/149071.png"
  return (
        <div className='mt-4'>
            <h4>People you may know</h4>
            <div class='row'>
    {people.map((p, index) => (
        <div class={`col-md-4 card-container-${index}`} key={p._id}>
            <div class={`card card-${index}`}>
                <div class={`card-body card-body-${index}`}>
                    <div>
                        <img
                            src={p.image && p.image.url ? p.image.url : defaultImage}
                            alt={p.name}
                            class={`profile-image profile-image-${index}`}
                        />
                        <span class={`name name-${index}`}>{p.name}</span>
                    </div>
                    <div class={`content content-${index}`}>
                        {/* Content to be shown */}
                        <p>{p.description}</p>
                        {/* Add more content here if needed */}
                    </div>
                    <div>
                        <button class={`follow-btn follow-btn-${index}`}>Follow</button>
                    </div>
                </div>
            </div>
        </div>
    ))}
</div>
        </div>
 )
}

export default PeopleComp