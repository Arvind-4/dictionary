import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Container, Switch, withStyles } from '@material-ui/core'
import Header from './components/header/header'
import Definition from './components/definition/definition'
import { grey } from '@material-ui/core/colors'

function App() {

    const [meaning, setMeaning] = useState([])
    const [word, setWord] = useState('')
    const [category, setCategory] = useState('en')
    const [lightMode, setLightMode] = useState(false)

    const dictionary_api = async ()=> {
        try{
            var url_link = `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}/`
            const data = await axios.get(url_link)
            console.log(data)
            setMeaning(data.data)
        }
        catch(error){
            console.log('The Error is ', error)
        }        
    }
    console.log(meaning)
    useEffect(()=> {
        dictionary_api()
    }, [word, category])

    return <div className='App' style={{height:'100vh', backgroundColor: '#282c34', color: 'white'}}>
                <Container maxWidth='md' style={{display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'space-evenly'}}>

                    <Header 
                        category={category} 
                        setCategory={setCategory} 
                        word={word} 
                        setWord={setWord}
                        setMeaning={setMeaning}
                         >
                    </Header>

                    {meaning && (
                        <Definition 
                            word={word}
                            meaning={meaning} 
                            category={category} >
                        </Definition>
                    )}
                </Container>
            </div>

}

export default App;
