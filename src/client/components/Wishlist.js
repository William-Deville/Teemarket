import * as React from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Wishlist(){
    const Trash = <FontAwesomeIcon icon={faTrash} />;
    const poster = 1;
    if(poster >= 1){
        return(
            <div className="container_login">
            <div className="container_login_title">
                <h1 className="login">WISHLIST</h1>
            </div>
                <div className="container_list">
                    <div className="container_wishlist">
                        <div className="box_img">
                            <img className="img_wishlist" src="" height="150" width="100" alt="test" />
                        </div>
                        <div className="box_name">
                            <a className="name_wishlist" href="#">test</a>
                        </div>
                        <div className="box_trash">
                            <a href="#" className="icon_trash"><i className="svg">{Trash}</i></a>
                        </div>
                    </div>
                    <hr/>
                </div>
            </div>
        )
    } else {
        return(
            <div className="container_login">
                <div className="container_login_title">
                    <h1 className="login">WISHLIST</h1>
                </div>
                <div className="container_wishlist">
                    <h1 className="empty_wl">EMPTY</h1>
                </div>
            </div>
        )
    }
}