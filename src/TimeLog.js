import './App.css';
import {useState, useEffect} from 'react'

function CreateTimeLog({entries}){
    const entriesInOrder = entries.toReversed();
    let logEntries = entriesInOrder.map((entry,index) => <div className = "entry" key={index}>{entry}</div>)

    return(
        <div className="timeLog">
            {logEntries}
        </div>
    )
}

function NewInput({nextEntry, onNewEntry, handleClick}){

    return(
        <div>
            <span className="center">
                <textarea
                    id="next-entry" 
                    key="next-entry"
                    placeholder="new entry..."
                    value = {nextEntry}
                    onChange={(e) => onNewEntry(e.target.value)}
                />
                <label htmlFor="add-entry">
                    <button id="add-entry" onClick= {() => handleClick()}>
                        Add Entry +
                    </button>
                </label>
            </span>
        </div>
    )
}


function TimeLog(){
    const getInitialEntries = () => {
        const initialEntries = localStorage.getItem('ENTRIES');
        return (initialEntries!==null ? JSON.parse(initialEntries) : [])
      }

    const [entries, setEntries] = useState(getInitialEntries)
    const [nextEntry, setNextEntry] = useState('');

    useEffect(()=>{
        localStorage.setItem('ENTRIES', JSON.stringify(entries));
      }, [entries])

    function handleClick(){

        const updatedEntries = entries.concat(nextEntry);
        setEntries(updatedEntries);
        setNextEntry('');
    }
    

    return(
        <div>
            <h2 className="subtitle">Time Log</h2>
            <NewInput 
                nextEntry={nextEntry} 
                onNewEntry={setNextEntry} 
                handleClick={handleClick}     
            />
            <CreateTimeLog entries ={entries} />
        </div>
        
        
    )
}

export default TimeLog;

