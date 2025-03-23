import './Main.css'
import Article from '../Articles/Article'
import {data} from '../../Data/data'
import { useEffect, useState } from 'react'
import Container from '../Container/Container'

export default function Main({inputData}){
    
    const [number, setNumber] = useState(10)
    const [loading, setLoading] = useState(false)
    const [Data, setData] = useState(data)
    const showMore = 10

    useEffect(()=>{
        function handleScroll(){
            if(
                !loading && window.innerHeight + window.scrollY >= document.body.offsetHeight - 100
            ){
                setLoading(true)

                setTimeout(()=>{
                    setNumber((prev) => Math.min(prev + showMore, data.length))
                   setLoading(false) 
                }, 1500)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return() => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [data.length, loading])

    useEffect(()=>{
        setNumber(10)
        setData(data.filter(el => el.title.toLowerCase().includes(inputData.toLowerCase())))
    }, [inputData])

    return(
        <>
            <main className="main">
                <Container>
                    <div className="main__articles">
                        { Data.slice(0, number).map((el, i) => (
                            <Article info={el} key={i}/>
                        ))}
                    </div>
                    <>{number < Data.length && (
                        loading && <p className='main__text' onClick={() => setNumber(number + showMore)}>Загрузка...</p>
                        )}
                    </>
                </Container>
            </main> 
        </>
    )
}