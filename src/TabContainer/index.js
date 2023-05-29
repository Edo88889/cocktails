import {Url} from "../utils/constants";
import {useEffect, useState} from "react";
import Search from "./Search";
import Draw from "./Draw";
import './style.css'

function Index() {
    const [data, setData] = useState()
    const [search, setSearch] = useState('')

    useEffect(() => {
        (async () => {
            try {
                const resp = await fetch(`${Url}${search}`)
                const result = await resp.json()
                setData(result.drinks)
            } catch (error) {
                throw error
            }
        })()
    }, [search])
    return (
        <>
            <Search setSearch={setSearch} search={search}/>
            <Draw data={data}/>
        </>
    )
}

export default Index;