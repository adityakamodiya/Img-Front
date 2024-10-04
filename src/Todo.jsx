import React, { useState } from 'react'

function Todo() {
    const [st, setst] = useState([]);
    const [Value, setvalue] = useState('')
    const[isEdit,setisEdit] = useState(false);
    const[currentind,setcurrentind] = useState('');

    function adddata() {
        if(isEdit){
            const update = [...st];
            update[currentind]= Value;
            setst(update);
            setisEdit(false)
            currentind(null);
            setvalue('');
            return;
        }
        if(Value=='') {alert('emptyyyy') 
        
        }
        else  setst([...st, Value]);
         
        setvalue('');

    }
    function doedit(key,index){
        console.log(key,index);
        setisEdit(true);
        setcurrentind(index);
        setvalue(key);
    }
    return (
        <>


            <input type="text" placeholder='enter something' value={Value} onChange={e => setvalue(e.target.value)} />
            <button onClick={adddata}>  {isEdit ? 'Update' : 'Add'}</button>
            <div>
                {
                    st.map((key, index) => {
                        return (<>
                            <p key={index}>{key}</p>
                            <button onClick={(e)=>doedit(key,index)}>edit</button>
                        </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Todo
