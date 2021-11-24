import * as React from "react";

export default function Homepage(){
    return(
        <div className="homepage_title">
            <h1>OUR PRODUCTS</h1>

            <main>
    <div class="ui grid container">
        <div class="ui two column centered grid">
            <div class="column">
                
                <form action="/create" method="post" enctype="multipart/form-data" class="ui form">
                    
                    <div class="field">
                        <label>Image</label>
                        <input name="image" type="file" />
                    </div>
                    <button class="ui primary button" type="submit">Post</button>
                </form>
            </div>
        </div>
    </div>
</main>
        </div>

        
    )
}