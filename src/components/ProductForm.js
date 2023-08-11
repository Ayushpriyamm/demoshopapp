import {useState} from 'react';
import './ProductForm.css';

function ProductForm(){

    const[ Newtitle, setTitle ] = useState(' ');
    const[ Newdate, setDate ] = useState(' ');

    function titleChangeHandler(event){
       setTitle(event.target.value)
       //console.log(event.target.value)
    }
    function dateChangeHandler(event){
        setDate(event.target.value)
        //console.log(event.target.value)
        //console.log(title);
        //console.log(date);
     }

    function submitHandler(event){
        event.preventDefault();

        const ProductData ={
            title:Newtitle,
            date:Newdate
        };
        console.log(ProductData);
        setDate('');
        setTitle('')
    }
     

    return(<form onSubmit={submitHandler}>

        <div className='new-product__controls'>

            <div className='new-product_control'>
                <label>Title</label>
                <input type='text' value={Newtitle} onChange={titleChangeHandler}></input>
            </div>

            <div className='new-product_control'>
                <label>Date</label>
                <input type='Date' value={Newdate} onChange={dateChangeHandler} min='2023-01-01' max='2023-12-12' ></input>
            </div>

            <div className='new-product_button'>
                <button type='submit'>Add Product</button>
            </div>

        </div>
        
        
    </form>)
}
export default ProductForm;