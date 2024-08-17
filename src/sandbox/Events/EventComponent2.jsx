import { Button } from '@mui/material';


export default function EventComponent2() {
    const handleClick = (event) => {
        console.log(Event); console.log(event.target.value);
    }
    return (
        <div>
            <Button variant="contained" onClick={handleClick}>click the button</Button>
            <Button variant="contained" onClick={(e) => console.log(e.target.textContent)}>click the button</Button>
        </div>
    )
}
