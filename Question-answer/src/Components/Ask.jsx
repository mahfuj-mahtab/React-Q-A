import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Banner from './Banner'
function Ask() {
  return (
    <div>
        <Header/>
        <Banner/>
        <div class="container bg">
    <div class="main_container ">
        <div class="ask_section">
            <div class="ask_section_main">
                <form action="" method="POST">
                  
                    <input type="text" name="title" id="" class="ask_input" placeholder="Please Enter Question Title"/><br/>
                    <textarea name="details" id="" cols="80" rows="25" class="ask_textarea" placeholder="Please Enter Question Details"></textarea><br/>
                    <select name="category" id="" class="ask_input_select">
                        <option value="None">None</option>
                        
                        <option value="{{ cat.cat_name }}">haha</option>
                        
                       
                    </select>
                    <br/>
                    <input type="submit" value="Submit" class="ask_btn"/>
                </form>
            </div>
        </div>
    </div>
</div>
<Footer/>
    </div>
  )
}

export default Ask