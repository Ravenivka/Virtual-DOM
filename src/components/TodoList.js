import React, { useState } from 'react';
import './TodoList.css';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TaskInput () {
    const [inputText, setInputText] = useState('');
    const [arr, setArr] = useState([
        { id: 1, text: "Очистить разум" },
        { id: 2, text: "Отделить овец от козлов" },
        { id: 3, text: "Познать самоё себя" }
    ]);
    function setID (array) {
        let i = 1;
        let flag = true;
        while (flag) {
            flag = false;
        } 
        array.forEach(element => {
            if (parseInt(element.id) == i) {
                i++;
                flag = true;
            }
        });
        return i;
    }   

    function clickHandler() {
        if (!inputText.trim()) {
            return null;
        }
        setArr([...arr, {
            id: setID(arr),
            text: inputText
        } ]);
        setInputText('');        
    }

    return (
        <div className="list">   
            <h2 className='header' >Задачник</h2>       
            <TextField id="filled-basic" label="Добавить Задачу" variant="filled" className='field' 
                value={inputText}
                onChange={(event) => setInputText(event.target.value)}
            />
            <br/>
            <Button variant="contained" onClick={clickHandler}>Добавить</Button>         

            <Card sx={{ minWidth: 400, marginTop: '20px' }}>
                <CardContent>
                    <Typography variant="h5" component="div" sx={{ color: 'navy'}}>
                        Список дел
                    </Typography>
                    <br />
                    {arr.map((item) => ( 
                    <div className='cardItem'>                        
                        <Typography key={item.id} sx={{ color: 'navy'}}>   {item.text} </Typography> 
                        <DeleteIcon className="remover" sx={{ color: 'red'}} onClick={function() {
                        arr.splice(arr.indexOf(item), 1);
                        setArr([...arr]);
                        }} />  
                    </div>                
                    ))}
                </CardContent>      
            </Card>


        </div>

    )

}


