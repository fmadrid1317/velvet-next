import axios from 'axios';
import Router, { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import Card from '@/components/cards/Card';
import cocktailsList from "../data/cocktailsList.json"


function displayResults() {
    const router = useRouter();
    const { cocktail } = router.query;
    const [property, setProperty] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    console.log("coctail query:", cocktail);


    // const fetchPropertiesInfo = async () => {

    //     const api_token = process.env.NEXT_PUBLIC_API_TOKEN

    //     const response = await fetch(`dummy/api/filter?term=${location}`, {
    //         method: 'GET',
    //         headers: {
    //             'Authorization': 'Bearer ' + api_token,
    //             'Content-Type': 'application/json',
    //             'Accept': "application/vnd.v1+json"
    //         }
    //     })
    //     const data = await response.json()
    //     setProperty(data.properties)
    // };

    // const fetchCocktail = () => {
    //     const options = {
    //       method: 'GET',
    //       url: 'https://the-cocktail-db.p.rapidapi.com/search.php',
    //       params: {s: `${cocktail}`},
    //       headers: {
    //         'X-RapidAPI-Key':,
    //         'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
    //       }
    //     };
        
    //     axios.request(options).then(function (response) {
    //         console.log("first drink:", response.data.drinks);
    //         setProperty(response.data.drinks[0])
    //     }).catch(function (error) {
    //         console.error(error);
    //     });
    //   }

    useEffect(() => {
        //fetchPropertiesInfo();
        axios.get(`api/cocktails/${cocktail}`).then((res)=>{
            setProperty(res.data);
        }).catch((err) =>{
            console.log(err);
        })
        //fetchCocktail();

    }, [`${cocktail}`]);

    const handleSearch = (event) =>{
        setSearchInput(event.target.value);
    }

    const search = () => {
        router.push({
            pathname: "/result",
            query: {
            cocktail: searchInput,
            }
        })
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          search();
        }
    }


    return (
        <DefaultLayout>
            <div className='bg-white w-full border rounded-md border-gray p-4 shadow'>
                <div>
                    <input type="text" className="w-1/2 mb-4 pl-4 bg-white  border border-gray text-gray text-md rounded-xl p-2" placeholder='Search here' onChange={handleSearch} value={searchInput} onKeyDown={handleKeyDown}/>
                    <button onClick={search} className=' ml-4 bg-red text-white rounded-lg p-2'>Search</button>
                </div>
                <div className=''>
                    {/* <Card title={property.strDrink} description={property.strInstructions}/> */}
                    <Card title={property.title} description={property.description} cocktail={property}/>
                </div>
            </div>
        </DefaultLayout>
    )
}
export default displayResults