import { useContext, useState } from "react"
import { themeContext } from "./App"
import Switch from '@mui/material/Switch';


const Sample=()=>{
    const [theme,setTheme]=useContext(themeContext)
    const [checked, setChecked] = useState(true);

    const handleChange = (event) => {
      setChecked(event.target.checked);
      checked?setTheme("white"):setTheme("gray")
    };
    return(
        <div style={{backgroundColor:theme}}>
              <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
        <h1>Hi i am using useContext here</h1>
        </div>
    )
}
export default Sample;