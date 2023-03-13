import axios from 'axios';
import Router, { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import Card from '@/components/cards/Card';

function displayResults() {
    const router = useRouter();
    const { cocktail } = router.query;
    const [property, setProperty] = useState([]);
    const [searchInput, setSearchInput] = useState("");


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

    useEffect(() => {
        //fetchPropertiesInfo();
        axios.get(`api/cocktails/${cocktail}`).then((res)=>{
            setProperty(res.data);
        }).catch((err) =>{
            console.log(err);
        })
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

    console.log(property)

    return (
        <DefaultLayout>
            <div className='bg-white w-full border rounded-md border-gray p-4 shadow'>
                <div>
                    <input type="text" className="w-1/2 mb-4 pl-4 bg-white  border border-gray text-gray text-md rounded-xl p-2" placeholder='Search here' onChange={handleSearch} value={searchInput} />
                    <button onClick={search} className=' ml-4 bg-red text-white rounded-lg p-2'>Search</button>
                </div>
                <div className=''>
                    {/* {cocktailsList.filter(list =>{
              if(searchInput === ''){
                return list
              }else if(list.title.toLowerCase().includes(searchInput.toLowerCase())){
                return list
              }
            }).map(list =>{
              <Card title="Welcome to Velvet by Luis" description="Please search for some cocktails"/>
            })
          } */}
                    <Card title="Welcome to Velvet by Luis" description="Please search for some cocktails" />
                </div>
            </div>
        </DefaultLayout>
    )
}
export default displayResults